const { Todo } = require("../../models/Todo");

const updateStatusCompleted = async (id, body, obj) => {
  const result = await Todo.findByIdAndUpdate(id, body, obj);
  return result;
};

module.exports = updateStatusCompleted;
