// routes/wasteItemRoutes.js
const express = require("express");
const {
  createWasteItem,
  getAllWasteItems,
  getWasteItemById,
  updateWasteItem,
  deleteWasteItem,
} = require("../controllers/wasteItemController");

const router = express.Router();

router.post("/", createWasteItem);
router.get("/", getAllWasteItems);
router.get("/:id", getWasteItemById);
router.put("/:id", updateWasteItem);
router.delete("/:id", deleteWasteItem);

module.exports = router;
