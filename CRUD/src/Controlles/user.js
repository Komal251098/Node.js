const User = require("../Models/user");

const handleGetAllUsers = async (req, res) => {
  const allDbUser = await User.find({});
  return res.json(allDbUser);
};

const handleGetAllById = async (req, res) => {
  const allDbUser = await User.findById(req.params.id);
  if (!allDbUser) return res.status(404).json({ msg: "user not found" });
  return res.json(allDbUser);
};

const handleUpdateUserById = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, {
    userName: req.body.userName,
  });
  return res.json({ status: "Update User" });
};

const handleDeleteUserById = async (req, res) => {
  await User.findByIdAndDelete(req.params.id, {
    userName: req.body.userName,
  });
  return res.json({ status: "Delete" });
};

const handleCreateUser = async (req, res) => {
  const body = req.body;
  const results = await User.create({
    userName: body.userName,
    email: body.email,
  });

  console.log("result", results);
  return res.status(201).json({ msg: "user are created", id: results._id });
};

module.exports = {
  handleGetAllUsers,
  handleGetAllById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
};
