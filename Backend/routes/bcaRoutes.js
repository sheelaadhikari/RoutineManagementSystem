import express from "express";
import { isSuperAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  bcafcrController,
  deletebcafrController,
  getSinglebcafrController,
  getbcafrController,
  updatebcafrController,
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

// delete all routine of first sem bca
router.delete("/delete-bcafroutine", deletebcafrController);

// update all routine of first sem bca
router.put("/update-bcafroutine", updatebcafrController);
export default router;
