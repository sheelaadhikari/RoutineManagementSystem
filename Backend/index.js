import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import color from "@colors/colors";
import authRoutes from "./routes/authRoutes.js";

//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

// routes
app.use("/api/v1/auth", authRoutes);

//rest api (testing)
app.get("/", (req, res) => {
  res.send("<h1>welcome to this project</h1>");
});

//port
const PORT = process.env.PORT || 8001;
//run listen
app.listen(PORT, () => {
  console.log(
    `server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .bgBrightCyan
  );
});
