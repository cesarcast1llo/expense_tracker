const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${process.env.DB_PASS}@${process.env.DB_HOST}/expensetracker?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }
    );

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
