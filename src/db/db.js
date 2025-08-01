const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to MongoDB✅");
    })
    .catch((err) => {
      console.error("❌Error connecting to MongoDB:", err);
    });
}

module.exports = connectToDB