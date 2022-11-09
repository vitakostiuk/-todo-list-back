const todoService = require("../../services/todo");

const updateById = async (req) => {
  const { todoId } = req.params;
  const result = await todoService.updateById(todoId, req.body, {
    new: true,
  });
  return result;
};

module.exports = updateById;
