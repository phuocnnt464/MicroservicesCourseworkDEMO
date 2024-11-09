// models/wasteItemModel.js
const mongoose = require("mongoose");

const wasteItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  disposalGuidelines: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("WasteItem", wasteItemSchema);
