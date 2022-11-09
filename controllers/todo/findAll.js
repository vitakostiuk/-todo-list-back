const todoService = require("../../services/todo");

const getAllTodo = async (req) => {
  const { id: owner } = req.user;
  const todos = await todoService.findAll(owner);
  return todos;
};

module.exports = getAllTodo;
