const Contact = require("../models/contact");
const { NotFoundError } = require("../errors");

const createContact = async (req, res) => {
  req.body.author = "Contact Form";

  const Contacts = await Contact.create(req.body);

  res.status(201).json(Contacts);
};

const getContacts = async (req, res) => {
  const Contacts = await Contact.find({ author: "Contact Form" });

  res.status(200).json({ Contacts, count: Contacts.length });
};

const getContact = async (req, res) => {
  const ContactId = req.params.id;
  const Contact = await Contact.findOne({ user: "Contact Form", _id: ContactId });

  res.status(200).json(Contact);
};

const updateContact = async (req, res) => {
  const Contact = await Contact.findOneAndUpdate(
    { author: "Contact Form", _id: req.params.id },
    req.body,
    { runValidators: true, new: true }
  );

  res.status(200).json(Contact);
};

const deleteContact = async (req, res) => {
  const Contact = await Contact.findOneAndDelete({
    author: "Contact Form",
    _id: req.params.id,
  });

  if (!Contact) {
    throw new NotFoundError(`Contact with id ${req.params.id} not found`);
  }

  res.status(204).json({ data: "Contact deleted" });
};

module.exports = {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
};
