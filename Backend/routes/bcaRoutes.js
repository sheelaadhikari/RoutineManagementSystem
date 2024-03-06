import express from "express";
import { isSuperAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import {
  bcafcrController,
  getSinglebcafrController,
  getbcafrController,
} from "../controllers/bcafsemController.js";
const router = express.Router();

//creating  bca first semester routine routes
//routes for creating routine
router.post(
  "/create-bcafroutine",
  requireSignIn,
  isSuperAdmin,
  bcafcrController
);

// get all routine of first sem bca
router.get("/get-bcafroutine", getbcafrController);

// get single day routine of first sem bca
router.get("/get-singledr/:day", getSinglebcafrController);
export default router;
