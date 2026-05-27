const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("contact API running");
});

const upload = require("./middleware/uploadMiddleware");


app.use(express.json({ limit: "10mb" }));
  app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("upload API running");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/admin", require("./routes/adminDashboardRoutes"));

app.listen(process.env.PORT, () =>
  console.log("Server running on port 5000")
);

