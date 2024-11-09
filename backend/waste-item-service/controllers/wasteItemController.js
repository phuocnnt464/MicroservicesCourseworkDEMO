// controllers/wasteItemController.js
const WasteItem = require("../models/wasteItemModel");

// Tạo mới vật phẩm chất thải
exports.createWasteItem = async (req, res) => {
  try {
    const { name, category, description, disposalGuidelines } = req.body;
    const newWasteItem = new WasteItem({ name, category, description, disposalGuidelines });
    await newWasteItem.save();

    res.status(201).json({ message: "Waste item created successfully", newWasteItem });
  } catch (error) {
    res.status(500).json({ message: "Failed to create waste item", error });
  }
};

// Lấy tất cả các vật phẩm chất thải
exports.getAllWasteItems = async (req, res) => {
  try {
    const wasteItems = await WasteItem.find();
    res.json(wasteItems);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve waste items", error });
  }
};

// Lấy vật phẩm chất thải theo ID
exports.getWasteItemById = async (req, res) => {
  try {
    const wasteItem = await WasteItem.findById(req.params.id);
    if (!wasteItem) return res.status(404).json({ message: "Waste item not found" });

    res.json(wasteItem);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve waste item", error });
  }
};

// Cập nhật vật phẩm chất thải
exports.updateWasteItem = async (req, res) => {
  try {
    const { name, category, description, disposalGuidelines } = req.body;
    const updatedWasteItem = await WasteItem.findByIdAndUpdate(
      req.params.id,
      { name, category, description, disposalGuidelines },
      { new: true }
    );

    if (!updatedWasteItem) return res.status(404).json({ message: "Waste item not found" });
    res.json({ message: "Waste item updated successfully", updatedWasteItem });
  } catch (error) {
    res.status(500).json({ message: "Failed to update waste item", error });
  }
};

// Xóa vật phẩm chất thải
exports.deleteWasteItem = async (req, res) => {
  try {
    const wasteItem = await WasteItem.findByIdAndDelete(req.params.id);
    if (!wasteItem) return res.status(404).json({ message: "Waste item not found" });

    res.json({ message: "Waste item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete waste item", error });
  }
};
