const express = require("express");
const weatherController = require("../controllers/weatherController.js");

const router = express.Router();

router.get("/:cityName", weatherController.getWeather);

// router.get("/:city", (req, res) => {
//   console.log(req.body);
// });

module.exports = router;
