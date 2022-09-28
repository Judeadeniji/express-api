require("express-async-errors");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// routing
const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/project");
const contactRoutes = require("./routes/contact");

// middlewares
const authMiddleware = require("./middlewares/auth");
const errorHandler = require("./middlewares/error-handler");

const app = express();
app.use(express.urlencoded({
  extended: false
}))
.use(cors())
.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/projects", authMiddleware, blogRoutes);
app.use("/api/contact", authMiddleware, contactRoutes);

app.use(errorHandler);

const port = process.env.PORT || 8000;


const start = async () => {
  try {
    await mongoose.connect('db_url');
    app.listen(port, () => {
      console.log("DB connected successfully");
    });
  } catch (err) {
    console.log(err);
  }
};
start();

module.exports = app;
