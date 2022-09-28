const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      default: "Untitled Post",
      minlength: 3,
    },
    message: {
      type: String,
      required: true,
      minlength: 10,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("contact", ContactSchema);
