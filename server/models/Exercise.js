const mongoose = require("mongoose");

const Exercise = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  calories: {
      type: Number,
      required: true
  }
});

module.exports = mongoose.model("Exercise", Exercise);