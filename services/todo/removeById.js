const { Todo } = require("../../models/Todo");

const removeById = async (id) => {
  const result = await Todo.findByIdAndRemove(id);
  return result;
};

module.exports = removeById;
