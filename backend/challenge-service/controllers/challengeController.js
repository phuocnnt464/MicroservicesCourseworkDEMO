// controllers/challengeController.js
const Challenge = require("../models/challengeModel");

// Tạo mới thử thách
exports.createChallenge = async (req, res) => {
  try {
    const { title, description, difficulty, scoringCriteria } = req.body;
    const newChallenge = new Challenge({ title, description, difficulty, scoringCriteria });
    await newChallenge.save();

    res.status(201).json({ message: "Challenge created successfully", newChallenge });
  } catch (error) {
    res.status(500).json({ message: "Failed to create challenge", error });
  }
};

// Lấy tất cả thử thách
exports.getAllChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve challenges", error });
  }
};

// Lấy thử thách theo ID
exports.getChallengeById = async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) return res.status(404).json({ message: "Challenge not found" });

    res.json(challenge);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve challenge", error });
  }
};

// Cập nhật thử thách
exports.updateChallenge = async (req, res) => {
  try {
    const { title, description, difficulty, scoringCriteria } = req.body;
    const updatedChallenge = await Challenge.findByIdAndUpdate(
      req.params.id,
      { title, description, difficulty, scoringCriteria },
      { new: true }
    );

    if (!updatedChallenge) return res.status(404).json({ message: "Challenge not found" });
    res.json({ message: "Challenge updated successfully", updatedChallenge });
  } catch (error) {
    res.status(500).json({ message: "Failed to update challenge", error });
  }
};

// Xóa thử thách
exports.deleteChallenge = async (req, res) => {
  try {
    const challenge = await Challenge.findByIdAndDelete(req.params.id);
    if (!challenge) return res.status(404).json({ message: "Challenge not found" });

    res.json({ message: "Challenge deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete challenge", error });
  }
};
