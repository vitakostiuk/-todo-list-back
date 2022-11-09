const bcrypt = require("bcryptjs");

const userService = require("../../services/user");
const { User } = require("../../models/User");

const changePassword = async (req) => {
  const { email, newPassword } = req.body;
  // Хешуємо пароль
  const hashPassword = await bcrypt.hash(newPassword, 10);

  const user = await User.findOne({ email });

  const result = await userService.changePassword(user._id, hashPassword);
  const resultNewPassword = {
    password: hashPassword,
    user: result,
  };
  return resultNewPassword;
};

module.exports = changePassword;
