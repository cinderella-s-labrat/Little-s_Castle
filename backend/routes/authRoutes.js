const express = require("express");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");
const activationTemplate = require("../templets/activationTemplet");
const upload = require("../middleware/uploadMiddleware");
  

// REGISTER
router.post("/register", upload.single("profilePic"), async (req, res) => {

  try {

    const {
      Fname,
      midName,
      Lname,
      email,
      address,
      gender,
      age,
      DOB,
      phone,
      password
    } = req.body;

    const exist = await User.findOne({ email });

    if (exist) {
      return res.status(400).json({ msg: "Email exists" });
      alert("Email already exists");
    }

    const salt = await bcrypt.genSalt(10);

    const hashed = await bcrypt.hash(password, salt);

    const user = await User.create({
      Fname,
      midName,
      Lname,
      email,
      address,
      gender,
      age,
      phone,
      DOB,
      password: hashed,
      profilePic: req.file ? req.file.path : ""
    });

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d"
      }
    );

    const link = `${process.env.CLIENT_URL}/activate/${token}`;

    const fullName = `${Fname} ${midName || ""} ${Lname}`.replace(/\s+/g, " ").trim();

      await sendEmail(
      email,
      "Activate Your Account",
      activationTemplate(fullName, link),
    );

    
    res.json({
      msg: "Registration successful. Check your email."
    });

  } catch (err) {

    res.status(500).json({
      msg: err.message
    });

  }
});

// ACTIVATE
router.get("/activate/:token", async (req, res) => {
  try {
    const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    user.isVerified = true;
    await user.save();

    res.json({ msg: "Activated" });
  } catch {
    res.status(400).json({ msg: "Invalid link" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
try {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "Invalid" });

  if (!user.isVerified)
    return res.status(400).json({ msg: "Email is not verified" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ msg: "Invalid email or password" });

  const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1d" });

  res.json({ token, user: {
    id: user._id,
    email: user.email,
  } });
} catch (err) {
  res.status(500).json({ msg: err.message });
}
});

module.exports = router;