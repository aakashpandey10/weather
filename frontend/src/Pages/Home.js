import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather App</h1>
      <p>Welcome to the Weather Forecast App!</p>
      <Link to="/forecast">Go to Forecast</Link>
    </div>
  );
}

export default Home;
