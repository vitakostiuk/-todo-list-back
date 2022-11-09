const jwt = require("jsonwebtoken");
const userService = require("../../services/user");
const { User } = require("../../models/User");

const { JWT_SECRET } = process.env;

const login = async (req) => {
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
  const result = await userService.login(user._id, token);
  const resultWithToken = {
    token,
    user: result,
  };
  return resultWithToken;
};

module.exports = login;
