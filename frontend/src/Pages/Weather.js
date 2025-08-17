import React, { useEffect, useState } from "react";
import axios from "axios";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Delhi");
  const [loading, setLoading] = useState(false);

  // ✅ API call backend ko karega
  const fetchWeather = async (cityName) => {
    setLoading(true);
    try {
      // backend API hit kar rahe hain aur city ke sath India append kar rahe hain
      const res = await axios.get(
        `http://localhost:4000/api/weather/${cityName},India`
      );
      setWeather(res.data);
    } catch (err) {
      console.error("Error fetching weather:", err);
      setWeather(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      fetchWeather(city);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-2xl shadow">
      <h1 className="text-xl font-bold mb-4">🌤 Weather App</h1>

      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="flex-1 p-2 border rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading weather...</p>}

      {weather && (
        <div className="text-center">
          <h2 className="text-lg font-semibold">
            {weather.location.name}, {weather.location.country}
          </h2>
          <p className="text-2xl">{weather.current.temp_c}°C</p>
          <p>{weather.current.condition.text}</p>
          <img
            src={weather.current.condition.icon}
            alt="weather-icon"
            className="mx-auto"
          />
        </div>
      )}
    </div>
  );
}

export default Weather;
