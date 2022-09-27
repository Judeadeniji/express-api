const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      default: "Untitled Post",
      minlength: 3,
    },
    body: {
      type: String,
      required: true,
      minlength: 10,
    },
    client: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    img_url: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    author: {
      type: String,
      default: "Oluwaferanmi",
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("Post", PostSchema);
