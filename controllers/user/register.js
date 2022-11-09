const bcrypt = require("bcryptjs");
const userService = require("../../services/user");

const register = async (req) => {
  const { password } = req.body;

  // Хешуємо пароль
  const hashPassword = await bcrypt.hash(password, 10);

  const result = await userService.register(req.body, hashPassword);
  return result;
};

module.exports = register;
