const { Todo } = require("../../models/Todo");

const getById = async (id) => {
  const result = await Todo.findById(id);
  return result;
};

module.exports = getById;
