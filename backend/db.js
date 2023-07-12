const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    //mongodb+srv://okb:carpool123@carpool.ibijsuy.mongodb.net/?retryWrites=true&w=majority
    await mongoose.connect('mongodb+srv://okb:carpool123@carpool.ibijsuy.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
