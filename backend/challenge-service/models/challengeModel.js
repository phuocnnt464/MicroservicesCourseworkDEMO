// models/challengeModel.js
const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true,
  },
  scoringCriteria: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Challenge", challengeSchema);
