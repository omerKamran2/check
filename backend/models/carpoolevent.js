const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  carpoolStatus: {
    type: String,
    enum: ['none', 'oneWay', 'bothWays'],
    default: 'none',
  },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;