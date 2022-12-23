const getWeatherData = require("../utlits/utlits.js");

exports.getWeather = async (req, res) => {
  const city = req.params.cityName;
  const data = await getWeatherData.getWeather(city);
  res.status(200).json(data);
};
