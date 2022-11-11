const todoService = require("../../services/todo");

const getAllTodo = async (req) => {
  const { page = 1, limit = 5 } = req.query;
  const skip = (page - 1) * limit;

  const { id: owner } = req.user;
  const todos = await todoService.findAll(owner, skip, limit);
  return todos;
};

module.exports = getAllTodo;
