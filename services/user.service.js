const { User } = require("../models/User");

class UserService {
  async register(body, hashPassword) {
    const result = await User.create({ ...body, password: hashPassword });
    return result;
  }

  async login(id, token) {
    const result = await User.findByIdAndUpdate(id, { token });
    return result;
  }

  async logout(id) {
    const result = await User.findByIdAndUpdate(id, { token: "" });
    return result;
  }

  async changePassword(id, newPassword) {
    const result = await User.findByIdAndUpdate(id, { password: newPassword });
    return result;
  }
}

module.exports = UserService;
