const { User } = require("../../models/User");

const register = async (body, hashPassword) => {
  const result = await User.create({ ...body, password: hashPassword });
  return result;
};

module.exports = register;
