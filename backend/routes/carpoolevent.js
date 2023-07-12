const express = require('express');
const Event = require('../models/carpoolevent.js');

const router = express.Router();

// Create or update a calendar event
router.post('/events', async (req, res) => {
  try {
    const { date, carpoolStatus } = req.body;

    // Check if the event already exists for the given date
    const existingEvent = await Event.findOne({ start: date });

    if (existingEvent) {
      // If the event exists, update the carpool status
      existingEvent.carpoolStatus = carpoolStatus;
      await existingEvent.save();
      res.json({ message: 'Calendar event updated successfully', event: existingEvent });
    } else {
      // If the event doesn't exist, create a new event
      const newEvent = new Event({ start: date, carpoolStatus });
      await newEvent.save();
      res.status(201).json({ message: 'Calendar event created successfully', event: newEvent });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to create or update calendar event', error });
  }
});

module.exports = router;
