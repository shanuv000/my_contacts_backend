// @desc get all contacts
// @desc GET /api/contacts
// @access public
const getContacts = (req, res) => {
  res.status(202).json({ message: "get all conatcts" });
};
// @desc create new contacts
// @desc POST /api/contacts
// @access public
const createContact = (req, res) => {
  console.log("The request body is", req.body);
  res.status(201).json({ message: "Create contact" });
};
// @desc get individual contacts
// @desc GET /api/contacts/:id
// @access public
const getContact = (req, res) => {
  res.status(202).json({ message: `get Contact for ${req.params.id}` });
};
// @desc Update contacts
// @desc PUT /api/contacts/"id"
// @access public
const updateContact = (req, res) => {
  res.status(205).json({ message: `Update Contact ${req.params.id}` });
}; // @desc Delete contact
// @desc DELETE /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
  res.status(202).json({ message: `Delete Contact ${req.params.id}` });
};
module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
