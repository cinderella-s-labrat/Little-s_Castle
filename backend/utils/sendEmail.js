const nodemailer = require("nodemailer");
const path = require("path");

module.exports = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,

    attachments: [
      {
        filename: "logo.png",
        path:path.join(__dirname, "../assets/logo.png"),
        cid: "logo"
      }
    ]
  });
};

