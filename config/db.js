require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {

    //input your db url in .env file 
    const conn = await mongoose.connect(process.env.DB_URI, { //  MONGO_URI
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected to ${conn.connection.db.databaseName}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;