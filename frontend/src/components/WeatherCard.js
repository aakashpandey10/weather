import React from "react";

function WeatherCard({ city, temperature, condition }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", margin: "10px", display: "inline-block" }}>
      <h2>{city}</h2>
      <p>{temperature}</p>
      <p>{condition}</p>
    </div>
  );
}

export default WeatherCard;
