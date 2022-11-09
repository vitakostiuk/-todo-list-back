const getCurrent = async (req) => {
  const { email } = req.user;
  return { email };
};

module.exports = getCurrent;
