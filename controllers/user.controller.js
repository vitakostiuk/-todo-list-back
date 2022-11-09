const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserService = require("../services/user.service");
const { User } = require("../models/User");

const { JWT_SECRET } = process.env;

class UserController extends UserService {
  async register(req) {
    const { password } = req.body;

    // Хешуємо пароль
    const hashPassword = await bcrypt.hash(password, 10);

    const result = await this.userService.register(req.body, hashPassword);
    return result;
  }

  async login(req) {
    const { email } = req.body;
    const user = await User.findOne({ email });
    // Створюємо токен:
    // 1. payload - що шифрувати
    // 2. Заголовки (не обов'язкові)
    // 3. SECRET_KEY - за домопогою чого ми шифруємо
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" });
    const result = await this.userService.login(user._id, token);
    const resultWithToken = {
      token,
      user: result,
    };
    return resultWithToken;
  }

  async changePassword(req) {
    const { email, newPassword } = req.body;
    // Хешуємо пароль
    const hashPassword = await bcrypt.hash(newPassword, 10);

    const user = await User.findOne({ email });

    const result = await this.userService.changePassword(
      user._id,
      hashPassword
    );
    const resultNewPassword = {
      password: hashPassword,
      user: result,
    };
    return resultNewPassword;
  }

  async getCurrent(req) {
    const { email } = req.user;
    return { email };
  }

  async logout(req) {
    const { id } = req.user;
    const result = await this.userService.logout(id);
    return result;
  }
}

const userController = new UserController(new UserService());

module.exports = userController;
