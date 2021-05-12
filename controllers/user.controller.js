const User = require("../models/user");
exports.getUser = async (req, res) => {
  const user = await User.find();
  try {
    if (user < 1) {
      return res.status(400).json({ error: "no user found" });
    }
    return res.status(200).json({ data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    return res.status(200).json({ data: newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};
exports.updateUser = async (req, res) => {
  let user = await User.findById(req.params.userId);
  try {
    if (!user) {
      return res.status(400).json({ error: "No user with that id found" });
    }
    const { ...args } = req.body;
    const updatedField = await Market.findOneAndUpdate(
      { _id: req.params.userId },
      args,
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );
    return res.status(200).json({ data: updatedField });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};
exports.deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return res.status(400).json({ error: "user does not exist" });
  }
  return res.status(200).json({ data: "user deleted successfully" });
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};
