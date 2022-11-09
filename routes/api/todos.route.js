const express = require("express");
const todoController = require("../../controllers/todo");
const tryCatchWrapper = require("../../helpers/trycatchWrapper");
const validateTodo = require("../../middlewares/validateTodo");
const login = require("../../middlewares/login");

const todosRouter = express.Router();

todosRouter.get("/", login, tryCatchWrapper(todoController.getAllTodo));
todosRouter.post(
  "/",
  login,
  validateTodo,
  tryCatchWrapper(todoController.addTodo)
);
todosRouter.get("/:todoId", login, tryCatchWrapper(todoController.getById));
todosRouter.delete(
  "/:todoId",
  login,
  tryCatchWrapper(todoController.removeById)
);
todosRouter.put(
  "/:todoId",
  validateTodo,
  tryCatchWrapper(todoController.updateById)
);
todosRouter.patch(
  "/:todoId/private",
  login,
  validateTodo,
  tryCatchWrapper(todoController.updateStatusPrivate)
);
todosRouter.patch(
  "/:todoId/completed",
  login,
  validateTodo,
  tryCatchWrapper(todoController.updateStatusCompleted)
);

module.exports = todosRouter;
