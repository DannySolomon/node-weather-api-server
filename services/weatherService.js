const axios = require("axios");
require("dotenv").config();

const getSummary = async (city) => {
  const response = await axios.get(
    `https://forecast9.p.rapidapi.com/rapidapi/forecast/${city}/summary/`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "forecast9.p.rapidapi.com",
      },
    }
  );
  return response.data;
};

const getHourlyForecast = async (city) => {
  const response = await axios.get(
    `https://forecast9.p.rapidapi.com/rapidapi/forecast/${city}/hourly/`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "forecast9.p.rapidapi.com",
      },
    }
  );
  return response.data;
};

module.exports = {
  getSummary,
  getHourlyForecast,
};
