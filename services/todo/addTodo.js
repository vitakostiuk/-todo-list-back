const { Todo } = require("../../models/Todo");

const addTodo = async (body) => {
  const result = await Todo.create(body);
  return result;
};

module.exports = addTodo;
