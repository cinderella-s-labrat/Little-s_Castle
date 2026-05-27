const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// ADMIN LOGIN
router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const admin = await User.findOne({ email });

  if (!admin) {

    return res.status(400).json({
      msg: "Admin not found"
    });

  }

  // ONLY ADMIN
  if (admin.role !== "admin") {

    return res.status(403).json({
      msg: "Access denied"
    });

  }

  const match = await bcrypt.compare(
    password,
    admin.password
  );

  if (!match) {

    return res.status(400).json({
      msg: "Wrong password"
    });

  }

  const token = jwt.sign({

      id: admin._id,
      role: admin.role

    },

    process.env.JWT_SECRET
  );

  res.json({
    token,
    admin
  });

});

module.exports = router;