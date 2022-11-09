const { User } = require("../../models/User");

const logout = async (id) => {
  const result = await User.findByIdAndUpdate(id, { token: "" });
  return result;
};

module.exports = logout;
