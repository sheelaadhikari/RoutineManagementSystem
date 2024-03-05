import express from "express";
import { isSuperAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import { bcafContoller } from "../controllers/bcafContoller.js";
const router = express.Router();

//creating  bca first semester routine routes
router.post(
  "create-bcafroutine",
  requireSignIn,
  isSuperAdmin,
  formidable(),
  bcafContoller
);
export default router;
