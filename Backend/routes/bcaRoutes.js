import express from "express";
import { isSuperAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import { bcafcrController } from "../controllers/bcafsemController.js";
const router = express.Router();

//creating  bca first semester routine routes
//routes for creating routine
router.post(
  "/create-bcafroutine",
  requireSignIn,
  isSuperAdmin,
  bcafcrController
);
export default router;
