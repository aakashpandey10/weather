import React, { useState } from "react";
import axios from "axios";

function Forecast() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchForecast = async (cityName) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:4000/api/forecast/${cityName},India`
      );
      setForecast(res.data.forecast.forecastday);
    } catch (err) {
      console.error("Error fetching forecast:", err);
      setForecast(null);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      fetchForecast(city);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 text-white">
      {/* 🔍 Search Bar at Top */}
      <form
        onSubmit={handleSearch}
        className="flex justify-center mb-10"
      >
        <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden w-full max-w-lg">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="🔍 Search city..."
            className="flex-1 px-5 py-3 text-gray-800 focus:outline-none text-lg"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold text-lg"
          >
            Search
          </button>
        </div>
      </form>

      <h1 className="text-4xl font-extrabold mb-8 text-center drop-shadow-lg">
        🌤️ 5-Day Weather Forecast
      </h1>

      {loading && <p className="text-center">Loading forecast...</p>}

      {/* Forecast Cards */}
      {forecast ? (
        <div
          className="flex gap-8 overflow-x-auto pb-6 px-2"
          style={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
            whiteSpace: "nowrap",
          }}
        >
          {forecast.map((day) => (
            <div
              key={day.date}
              className="inline-block w-[220px] bg-white text-gray-800 rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300"
              style={{ flex: "0 0 auto" }}
            >
              <h3 className="font-bold text-lg text-indigo-600 mb-2">{day.date}</h3>
              <img
                src={day.day.condition.icon}
                alt="weather-icon"
                className="mx-auto my-4 w-16 h-16"
              />
              <p className="text-base font-medium">{day.day.condition.text}</p>
              <p className="mt-3 text-sm">🌡 {day.day.maxtemp_c}°C | {day.day.mintemp_c}°C</p>
              <p className="text-sm">💧 {day.day.daily_chance_of_rain}% rain</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg">No forecast data available.</p>
      )}
    </div>
  );
}

export default Forecast;
