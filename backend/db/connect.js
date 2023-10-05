const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    })
    .then(() => console.log("MongoDb is connected"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
