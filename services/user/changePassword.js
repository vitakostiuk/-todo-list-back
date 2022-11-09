const { User } = require("../../models/User");

const changePassword = async (id, newPassword) => {
  const result = await User.findByIdAndUpdate(id, { password: newPassword });
  return result;
};

module.exports = changePassword;
