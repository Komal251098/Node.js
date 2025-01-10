const express = require("express");
const router = express.Router();
const {
  handleGetAllUsers,
  handleGetAllById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
} = require("../Controlles/user");

router.route("/").get(handleGetAllUsers).post(handleCreateUser);

router
  .route("/:id")
  .get(handleGetAllById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
