const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const express = require("express");

router.get("/profile", auth, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

// EDIT PROFILE
router.put("/edit-profile", auth, async (req, res) => {

  const { Fname, email } = req.body;

  const user = await User.findById(req.user.id);

  user.Fname = Fname || user.Fname;
  user.email = email || user.email;

  await user.save();

  res.json({
    msg: "Profile updated",
    user
  });
});

// CHANGE PASSWORD
router.put("/change-password", auth, async (req, res) => {

  const {
    oldPassword,
    newPassword
  } = req.body;

  const user = await User.findById(req.user.id);

  const match = await bcrypt.compare(
    oldPassword,
    user.password
  );

  if (!match)
    return res.status(400).json({
      msg: "Old password incorrect"
    });

  const hashed = await bcrypt.hash(newPassword, 10);

  user.password = hashed;

  await user.save();

  res.json({
    msg: "Password changed successfully"
  });
});


module.exports = router;

