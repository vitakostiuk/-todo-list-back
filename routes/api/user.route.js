const express = require("express");
const userController = require("../../controllers/user");
const tryCatchWrapperUser = require("../../helpers/trycatchWrapperUser");
const validateUser = require("../../middlewares/validateUser.js");
const isExistNewUser = require("../../middlewares/isExistNewUser");
const isExistUser = require("../../middlewares/isExistUser");
const login = require("../../middlewares/login");

const userRouter = express.Router();

userRouter.get("./test", () => {
  console.log("test");
});

userRouter.post(
  "/register",
  validateUser,
  isExistNewUser,
  tryCatchWrapperUser(userController.register)
);

userRouter.post(
  "/login",
  validateUser,
  isExistUser,
  tryCatchWrapperUser(userController.login)
);

userRouter.post(
  "/change-password",
  validateUser,
  isExistUser,
  tryCatchWrapperUser(userController.changePassword)
);

userRouter.get(
  "/current",
  login,
  tryCatchWrapperUser(userController.getCurrent)
);

userRouter.get("/logout", login, tryCatchWrapperUser(userController.logout));

module.exports = userRouter;
