const mongoose = require("mongoose");

const connectDb = async () => {
  console.log(process.env.CONNECTION_STRING);
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "DataBase connected to mongodb",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDb;
