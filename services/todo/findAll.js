const { Todo } = require("../../models/Todo");

const findAll = async (owner) => {
  const result = await Todo.find({ owner }).populate("owner", "email");
  return result;
};

module.exports = findAll;
