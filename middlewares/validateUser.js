const createError = require("../helpers/createError");
const { authSchema } = require("../models/User");

const validateUser = async (req, res, next) => {
  try {
    const { error } = authSchema.validate(req.body);
    if (error) {
      throw createError(400, "Missing required user name field");
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateUser;
