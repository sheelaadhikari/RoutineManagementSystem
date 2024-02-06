import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import color from "@colors/colors";

//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//port
const PORT = process.env.PORT || 9000;
//run listen
app.listen(PORT, () => {
  console.log(
    `server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
