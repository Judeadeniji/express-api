const express = require("express");
const {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contact");

const router = express.Router();

router.route("/").post(createContact).get(getContacts);
router.route("/:id").get(getContact).patch(updateContact).delete(deleteContact);

module.exports = router;
