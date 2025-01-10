const mongoose = require("mongoose");

// Connection mongoose
const connectMongoDb = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error from MongoDB", error);
  }
};

module.exports = connectMongoDb;
