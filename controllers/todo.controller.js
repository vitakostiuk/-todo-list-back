const TodoService = require("../services/todo.service");

class TodoController {
  async getAllTodo(req) {
    const { id: owner } = req.user;
    const todos = await this.todoService.findAll(owner);
    return todos;
  }

  async addTodo(req) {
    const { id: owner } = req.user;

    const result = await this.todoService.addTodo({ ...req.body, owner });
    return result;
  }

  async getById(req) {
    const { todoId } = req.params;
    const result = await this.todoService.getById(todoId);
    return result;
  }

  async removeById(req) {
    const { todoId } = req.params;
    const result = await this.todoService.removeById(todoId);
    return result;
  }

  async updateById(req) {
    const { todoId } = req.params;
    const result = await this.todoService.updateById(todoId, req.body, {
      new: true,
    });
    return result;
  }

  async updateStatusPrivate(req) {
    const { todoId } = req.params;
    const result = await this.todoService.updateStatusPrivate(
      todoId,
      req.body,
      { new: true }
    );
    return result;
  }

  async updateStatusCompleted(req) {
    const { todoId } = req.params;
    const result = await this.todoService.updateStatusCompleted(
      todoId,
      req.body,
      { new: true }
    );
    return result;
  }
}

const todoController = new TodoController(new TodoService());

module.exports = todoController;
