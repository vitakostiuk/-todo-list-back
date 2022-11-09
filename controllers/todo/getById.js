const todoService = require("../../services/todo");

const getById = async (req) => {
  const { todoId } = req.params;
  const result = await todoService.getById(todoId);
  return result;
};

module.exports = getById;
