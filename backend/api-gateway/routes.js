// routes.js
const express = require("express");
const axios = require("axios");

const router = express.Router();

// Load các URL dịch vụ từ biến môi trường
const {
  USER_SERVICE_URL,
  WASTE_CATEGORY_SERVICE_URL,
  WASTE_ITEM_SERVICE_URL,
  CHALLENGE_SERVICE_URL,
} = process.env;

// Chuyển tiếp các yêu cầu của user-service
router.use("/users", async (req, res) => {
  const url = `${USER_SERVICE_URL}${req.originalUrl}`;
  //const url = `${USER_SERVICE_URL}${req.path}`; // Sử dụng req.path vì có "/api" thay vì "/"
  try {
    const response = await axios({ method: req.method, url, data: req.body });
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json(error.response ? error.response.data : { error: "Service Unavailable" });
  }
});

// Chuyển tiếp các yêu cầu của waste-category-service
router.use("/waste-categories", async (req, res) => {
  const url = `${WASTE_CATEGORY_SERVICE_URL}${req.originalUrl}`;
  //const url = `${WASTE_CATEGORY_SERVICE_URL}${req.path}`; // Sử dụng req.path
  try {
    const response = await axios({ method: req.method, url, data: req.body });
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json(error.response ? error.response.data : { error: "Service Unavailable" });
  }
});

// Chuyển tiếp các yêu cầu của waste-item-service
router.use("/waste-items", async (req, res) => {
  const url = `${WASTE_ITEM_SERVICE_URL}${req.originalUrl}`;
  //const url = `${WASTE_ITEM_SERVICE_URL}${req.path}`; // Sử dụng req.path
  try {
    const response = await axios({ method: req.method, url, data: req.body });
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json(error.response ? error.response.data : { error: "Service Unavailable" });
  }
});

// Chuyển tiếp các yêu cầu của challenge-service
router.use("/challenges", async (req, res) => {
  const url = `${CHALLENGE_SERVICE_URL}${req.originalUrl}`;
  //const url = `${CHALLENGE_SERVICE_URL}${req.path}`; // Sử dụng req.path
  try {
    const response = await axios({ method: req.method, url, data: req.body });
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json(error.response ? error.response.data : { error: "Service Unavailable" });
  }
});

module.exports = router;
