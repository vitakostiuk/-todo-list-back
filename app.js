const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

// import routes
const todosRouter = require("./routes/api/todos.route");
const userRouter = require("./routes/api/user.route");

// 1-- create web-server
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// 2-- Describe global middlewars
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// 3-- Create routes group
app.use("/api/todos/todo-list-frontend-and-backend", todosRouter);
app.use("/api/user/todo-list-frontend-and-backend", userRouter);

console.log("Database connection successful");

// 4-- Create errors handles
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
