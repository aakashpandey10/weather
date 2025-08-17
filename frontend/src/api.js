import axios from "axios";

// Apne backend ka URL (agar localhost pe run kar rahe ho to yahi rakho)
const API = axios.create({
  baseURL: "http://localhost:4000",
});

export const getWeather = (city) => API.get(`/weather?city=${city}`);
export const getForecast = (city) => API.get(`/forecast?city=${city}`);

export default API;
