const { Schema, model } = require("mongoose");
const Joi = require("joi");

// Регулярний вираз для email
const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

const authSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  newPassword: Joi.string().min(6),
});

const userSchema = new Schema(
  {
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Password is required"],
    },
    avatar: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    token: {
      type: String,
      default: null,
    },
    newPassword: {
      type: String,
      minlength: 6,
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("User", userSchema);

module.exports = { authSchema, User };
