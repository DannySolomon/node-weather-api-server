const weatherService = require("../services/weatherService");

exports.getSummary = async (req, res) => {
  const { city } = req.params;
  try {
    const summary = await weatherService.getSummary(city);
    res.json(summary);
  } catch (error) {
    console.error("Error fetching weather forecast summary:", error);
    res
      .status(500)
      .json({
        error: "An error occurred while fetching weather forecast summary.",
      });
  }
};

exports.getHourly = async (req, res) => {
  const { city } = req.params;
  try {
    const hourlyForecast = await weatherService.getHourlyForecast(city);
    res.json(hourlyForecast);
  } catch (error) {
    console.error("Error fetching hourly weather forecast:", error);
    res
      .status(500)
      .json({
        error: "An error occurred while fetching hourly weather forecast.",
      });
  }
};
