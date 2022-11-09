const todoService = require("../../services/todo");

const addTodo = async (req) => {
  const { id: owner } = req.user;

  const result = await todoService.addTodo({ ...req.body, owner });
  return result;
};

module.exports = addTodo;
