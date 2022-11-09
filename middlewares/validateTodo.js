const createError = require("../helpers/createError");
const { addSchema } = require("../models/Todo");

const validateTodo = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw createError(400, "Missing required name field");
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateTodo;
