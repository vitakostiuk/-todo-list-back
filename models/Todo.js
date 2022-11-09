const { Schema, model } = require("mongoose");
const Joi = require("joi");

const addSchema = Joi.object({
  todo: Joi.string().min(2),
  title: Joi.string().min(2),
  private: Joi.boolean(),
  completed: Joi.boolean(),
});

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },
    todo: {
      type: String,
      required: false,
    },
    private: {
      type: Boolean,
      required: false,
    },
    completed: {
      type: Boolean,
      required: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { versionKey: false, timestamps: true }
);

const Todo = model("todo", todoSchema);

module.exports = { Todo, addSchema };
