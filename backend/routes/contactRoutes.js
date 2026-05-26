const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const sendEmail = require("../utils/sendEmail");

router.post("/", async (req, res) => {
  try {

    const { name, email, subject, message } = req.body;

    await Contact.create({
      name,
      email,
      subject,
      message
    });

    await sendEmail(
      email, 
      "Thank you for contacting us",
      `Dear ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nThe Team`
    );
    
    res.json({
      msg: "Message sent successfully"
    });

  } catch (err) {

    res.status(500).json({
      msg: err.message
    });

  }
});

module.exports = router;