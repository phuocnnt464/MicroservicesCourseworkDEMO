// routes/userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/profile", authMiddleware, userController.getAllUsers);
router.get("/profile/:id", authMiddleware, userController.getUserProfileById);
router.put("/profile/:id", authMiddleware, userController.updateUser);
router.delete("/profile/:id", authMiddleware, userController.deleteUser);

module.exports = router;
