// controllers/wasteCategoryController.js
const WasteCategory = require("../models/wasteCategoryModel");

// Tạo mới loại chất thải
exports.createWasteCategory = async (req, res) => {
  try {
    const { name, description, disposalGuidelines } = req.body;
    const newWasteCategory = new WasteCategory({ name, description, disposalGuidelines });
    await newWasteCategory.save();

    res.status(201).json({ message: "Waste category created successfully", newWasteCategory });
  } catch (error) {
    res.status(500).json({ message: "Failed to create waste category", error });
  }
};

// Lấy tất cả các loại chất thải
exports.getAllWasteCategories = async (req, res) => {
  try {
    const wasteCategories = await WasteCategory.find();
    res.json(wasteCategories);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve waste categories", error });
  }
};

// Lấy loại chất thải theo ID
exports.getWasteCategoryById = async (req, res) => {
  try {
    const wasteCategory = await WasteCategory.findById(req.params.id);
    if (!wasteCategory) return res.status(404).json({ message: "Waste category not found" });

    res.json(wasteCategory);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve waste category", error });
  }
};

// Cập nhật loại chất thải
exports.updateWasteCategory = async (req, res) => {
  try {
    const { name, description, disposalGuidelines } = req.body;
    const updatedWasteCategory = await WasteCategory.findByIdAndUpdate(
      req.params.id,
      { name, description, disposalGuidelines },
      { new: true }
    );

    if (!updatedWasteCategory) return res.status(404).json({ message: "Waste category not found" });
    res.json({ message: "Waste category updated successfully", updatedWasteCategory });
  } catch (error) {
    res.status(500).json({ message: "Failed to update waste category", error });
  }
};

// Xóa loại chất thải
exports.deleteWasteCategory = async (req, res) => {
  try {
    const wasteCategory = await WasteCategory.findByIdAndDelete(req.params.id);
    if (!wasteCategory) return res.status(404).json({ message: "Waste category not found" });

    res.json({ message: "Waste category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete waste category", error });
  }
};
