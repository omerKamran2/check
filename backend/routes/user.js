const express = require('express');
const User = require('../models/user.js');

const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const { username, password } = req.body;

    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user', error });
  }
});

module.exports = router;
