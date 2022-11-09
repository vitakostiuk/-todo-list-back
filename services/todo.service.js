const { Todo } = require("../models/Todo");

class TodoService {
  // async findAll(params: IParams) {
  //   const { owner, skip = 0, limit = 0, ...filter } = params;
  //   const title = filter.title ? { title: { $regex: filter.title, $options: 'i' } } : {};
  //   const count = await Todo.find({
  //     $and: [{ ...filter, ...title }, { $or: [{ private: false }, { private: true, owner }] }]
  //   });

  //   const list = await Todo.find({
  //     $or: [{ private: false }, { private: true, owner }]
  //   })
  //     .find({ ...filter, ...title })
  //     .skip(Number(skip))
  //     .limit(Number(limit));

  //   return { list, count: count.length };
  // }

  async findAll(owner) {
    const result = await Todo.find({ owner }).populate("owner", "email");
    return result;
  }

  async addTodo(body) {
    const result = await Todo.create(body);
    return result;
  }

  async getById(id) {
    const result = await Todo.findById(id);
    return result;
  }

  async removeById(id) {
    const result = await Todo.findByIdAndRemove(id);
    return result;
  }

  async updateById(id, body, obj) {
    const result = await Todo.findByIdAndUpdate(id, body, obj);
    return result;
  }

  async updateStatusPrivate(id, body, obj) {
    const result = await Todo.findByIdAndUpdate(id, body, obj);
    return result;
  }

  async updateStatusCompleted(id, body, obj) {
    const result = await Todo.findByIdAndUpdate(id, body, obj);
    return result;
  }
}

module.exports = TodoService;
