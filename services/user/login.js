const { User } = require("../../models/User");

const login = async (id, token) => {
  const result = await User.findByIdAndUpdate(id, { token });
  return result;
};

module.exports = login;
