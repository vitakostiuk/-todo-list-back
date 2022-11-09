const userService = require("../../services/user");

const logout = async (req) => {
  const { id } = req.user;
  const result = await userService.logout(id);
  return result;
};

module.exports = logout;
