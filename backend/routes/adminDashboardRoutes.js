const router = require("express").Router();

const auth = require(
  "../middleware/authMiddleware"
);

const admin = require(
  "../middleware/adminMiddleware"
);

const User= require("../models/User");

// ADMIN DASHBOARD
router.get(
  "/dashboard",

  auth,
  admin,

  async (req, res) => {

    res.json({
      msg: "Welcome Admin"
    });

  }
);

// GET ALL USERS
router.get(
  "/users",

  auth,
  admin,

  async (req, res) => {

    const users = await User.find()
      .select("-password");

    res.json(users);

  }
);

module.exports = router;