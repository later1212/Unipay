const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    // Retrieve and print all collections
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
