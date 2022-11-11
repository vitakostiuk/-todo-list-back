const { Todo } = require("../../models/Todo");

const findAll = async (owner, skip, limit) => {
  const result = await Todo.find({ owner }, "", {
    skip,
    limit: Number(limit),
  }).populate("owner", "email");
  return result;
};

module.exports = findAll;
