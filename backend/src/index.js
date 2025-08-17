import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import weatherRoutes from "./routes/weather.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api", weatherRoutes);

app.get("/", (req, res) => {
  res.send("🌦️ Weather API is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
