const todoService = require("../../services/todo");

const removeById = async (req) => {
  const { todoId } = req.params;
  const result = await todoService.removeById(todoId);
  return result;
};

module.exports = removeById;
