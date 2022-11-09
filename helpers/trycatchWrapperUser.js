const createError = require("./createError");

const tryCatchWrapperUser = (ctrl) => {
  const func = async (req, res, next) => {
    try {
      const result = await ctrl(req, res, next);
      if (!result) {
        throw createError(404);
      }
      res.json(result);
    } catch (error) {
      next(error);
    }
  };
  return func;
};

module.exports = tryCatchWrapperUser;
