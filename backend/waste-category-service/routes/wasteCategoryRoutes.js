// routes/wasteCategoryRoutes.js
const express = require("express");
const {
  createWasteCategory,
  getAllWasteCategories,
  getWasteCategoryById,
  updateWasteCategory,
  deleteWasteCategory,
} = require("../controllers/wasteCategoryController");

const router = express.Router();

router.post("/", createWasteCategory);
router.get("/", getAllWasteCategories);
router.get("/:id", getWasteCategoryById);
router.put("/:id", updateWasteCategory);
router.delete("/:id", deleteWasteCategory);

module.exports = router;
