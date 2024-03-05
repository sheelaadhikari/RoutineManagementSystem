import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import color from "@colors/colors";
import authRoutes from "./routes/authRoutes.js";
import bcaRoutes from "./routes/bcaRoutes.js";
import morgan from "morgan";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:5173",
  method: "GET, POST, PUT, DELETE, PATHCH, HEAD",
  credentials: true,
};

//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/bca", bcaRoutes);
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
