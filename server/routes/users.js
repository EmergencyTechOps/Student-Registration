const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username, password });
    await user.save();
    res.json({ message: 'Please practice Docker class!' });
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
