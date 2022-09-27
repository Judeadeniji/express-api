require("express-async-errors");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// routing
const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/project");
const fileRoutes = require("./routes/file");

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
app.use("/api/projects", blogRoutes);
app.use("/api/file", fileRoutes);

app.use(errorHandler);

const port = process.env.PORT || 8000;


const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("Speak for the app is listening");
    });
  } catch (err) {
    console.log(err);
  }
};
start();

module.exports = app;
