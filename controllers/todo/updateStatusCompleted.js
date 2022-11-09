const todoService = require("../../services/todo");

const updateStatusCompleted = async (req) => {
  const { todoId } = req.params;
  const result = await todoService.updateStatusCompleted(todoId, req.body, {
    new: true,
  });
  return result;
};

module.exports = updateStatusCompleted;
