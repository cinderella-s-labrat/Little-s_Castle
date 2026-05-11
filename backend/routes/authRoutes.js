
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, address, gender, age, DOB, password } = req.body;

  const exist = await User.findOne({ email });
  if (exist) return res.status(400).json({ msg: "Email exists" });

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    address,
    gender,
    age,
    DOB,
    password: hashed
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d"
  });

  const link = `${process.env.CLIENT_URL}/activate/${token}`;

  await sendEmail(email, "REGISTRATION SUCCESS & ACTIVATION",
     `Welcome ${name},<br><br> Thank you for registering. 
      Please click the link below to activate your account.<br><br>
      <a href="${link}">Activate Account</a>`
  );

  res.json({ msg: "Check email to activate" });
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
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "Invalid" });

  if (!user.isVerified)
    return res.status(400).json({ msg: "Verify email first" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ msg: "Invalid" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({ token, user });
});

module.exports = router;