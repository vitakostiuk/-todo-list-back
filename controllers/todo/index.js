const addTodo = require("./addTodo");
const getAllTodo = require("./findAll");
const getById = require("./getById");
const removeById = require("./removeById");
const updateById = require("./updateById");
const updateStatusCompleted = require("./updateStatusCompleted");
const updateStatusPrivate = require("./updateStatusPrivate");

module.exports = {
  addTodo,
  getAllTodo,
  getById,
  removeById,
  updateById,
  updateStatusCompleted,
  updateStatusPrivate,
};
