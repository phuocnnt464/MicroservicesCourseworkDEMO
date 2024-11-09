// server.js
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const routes = require("./routes");

dotenv.config();

const app = express();

// Middleware xử lý JSON và URL encoded
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Đăng ký các tuyến chính của API Gateway
app.use("/", routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
