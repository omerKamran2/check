const express = require('express');
const connectDB = require('./db.js');
const userRoutes = require('./routes/user.js');
const eventRoutes = require('./routes/carpoolevent.js');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/events', eventRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
