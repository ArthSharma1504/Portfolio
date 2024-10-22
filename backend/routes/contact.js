const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// @route POST /api/contact
// @desc Submit a contact form
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.json({ msg: 'Contact form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
