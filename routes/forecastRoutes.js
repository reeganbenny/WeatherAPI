const express = require("express");
const forecastController = require("../controllers/forecastController.js");

const router = express.Router();

router.get("/:cityName/:days", forecastController.getForecast);

module.exports = router;
