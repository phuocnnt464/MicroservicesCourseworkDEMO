// routes/challengeRoutes.js
const express = require("express");
const {
  createChallenge,
  getAllChallenges,
  getChallengeById,
  updateChallenge,
  deleteChallenge,
} = require("../controllers/challengeController");

const router = express.Router();

router.post("/", createChallenge);
router.get("/", getAllChallenges);
router.get("/:id", getChallengeById);
router.put("/:id", updateChallenge);
router.delete("/:id", deleteChallenge);

module.exports = router;
