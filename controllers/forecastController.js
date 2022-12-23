const getForecastData = require("../utlits/utlits.js");

exports.getForecast = async (req, res) => {
  let cityName = req.params.cityName;
  let days = req.params.days;
  let data = await getForecastData.getForecast(cityName, days);
  console.log(data);
  res.status(200).json(data);
};
