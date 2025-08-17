import express from "express";
import axios from "axios";

const router = express.Router();

// ✅ Current Weather
router.get("/weather/:city", async (req, res) => {
  const city = req.params.city;
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=no`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching current weather:", error.message);
    res.status(500).json({ error: "Failed to fetch current weather" });
  }
});

// ✅ 5-Day Forecast
router.get("/forecast/:city", async (req, res) => {
  const city = req.params.city;
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}&days=5&aqi=no&alerts=no`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching forecast:", error.message);
    res.status(500).json({ error: "Failed to fetch forecast" });
  }
});

export default router;
