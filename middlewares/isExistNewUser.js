const createError = require("../helpers/createError");
const { User } = require("../models/User");

const isExistNewUser = async (req, res, next) => {
  const { email } = req.body;

  try {
    // Перевіряємо, чи є користувач з таким email. Для цього викор. метод findOne()
    const user = await User.findOne({ email });
    // якщо юзер є з таким емейл, то людина вже зареєстрована
    if (user) {
      throw createError(409, `${email} in use`);
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = isExistNewUser;
