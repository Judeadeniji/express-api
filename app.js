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
app.use("/api/projects", blogRoutes);
app.use("/api/contact", contactRoutes);

app.use(errorHandler);

const port = process.env.PORT || 8000;


const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://oluwaferanmi:Ade2niji@cluster0.jmpfoel.mongodb.net/?retryWrites=true&w=majority');
    app.listen(port, () => {
      console.log("Speak for the app is listening");
    });
  } catch (err) {
    console.log(err);
  }
};
start();

module.exports = app;
