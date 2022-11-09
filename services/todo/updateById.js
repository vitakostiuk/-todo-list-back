const { Todo } = require("../../models/Todo");

const updateById = async (id, body, obj) => {
  const result = await Todo.findByIdAndUpdate(id, body, obj);
  return result;
};

module.exports = updateById;
