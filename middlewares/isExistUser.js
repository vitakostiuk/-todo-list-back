const bcrypt = require("bcryptjs");
const createError = require("../helpers/createError");
const { User } = require("../models/User");

const isExistUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw createError(401, "Not authorized");
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      throw createError(401, "Not authorized");
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = isExistUser;
