const todoService = require("../../services/todo");

const updateStatusPrivate = async (req) => {
  const { todoId } = req.params;
  const result = await todoService.updateStatusPrivate(todoId, req.body, {
    new: true,
  });
  return result;
};

module.exports = updateStatusPrivate;
