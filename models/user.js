const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    about: {
      type: String,
    },
  },

  { timestamps: true }
);

//v

module.exports = mongoose.model("User", userSchema);
