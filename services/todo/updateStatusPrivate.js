const { Todo } = require("../../models/Todo");

const updateStatusPrivate = async (id, body, obj) => {
  const result = await Todo.findByIdAndUpdate(id, body, obj);
  return result;
};

module.exports = updateStatusPrivate;
