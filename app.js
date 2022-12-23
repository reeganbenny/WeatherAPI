const express = require("express");
const weatherRoutes = require("./routes/weatherRoutes.js");
const forecastRoutes = require("./routes/forecastRoutes.js");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use("/weather", weatherRoutes);
app.use("/forecast", forecastRoutes);

app.listen(3000, () => console.log("Server started on port 3000"));
