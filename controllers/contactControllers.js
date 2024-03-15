const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
// @desc get all contacts
// @desc GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();

  res.status(202).json(contacts);
});

// @desc POST /api/contacts
// @desc create new contacts
// @access public

const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contacts = Contact.create({ name, email, phone });
  res.status(201).json(contacts);
});

// @desc get individual contacts
// @desc GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(202).json(contact);
});

// @desc Update contacts
// @desc PUT /api/contacts/"id"
// @access public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(205).json(updatedContact);
}); // @desc Delete contact ୨୧⸝⸝﹕insert txt﹐⊂✦⊃ ‹𝟹
// @desc DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  console.log("contact", contact._id);
  await Contact.deleteOne();

  res.status(200).json(contact);
});
module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
