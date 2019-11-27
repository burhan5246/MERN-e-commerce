const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  meta: {},
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Page", PageSchema);
