const express = require("express");
const {
 getListFiles,
 upload
} = require("../controllers/file.controller");

const router = express.Router();

router.route("/").post(upload).get(getListFiles);

module.exports = router;