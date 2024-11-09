// models/wasteCategoryModel.js
const mongoose = require("mongoose");

const wasteCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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

module.exports = mongoose.model("WasteCategory", wasteCategorySchema);
