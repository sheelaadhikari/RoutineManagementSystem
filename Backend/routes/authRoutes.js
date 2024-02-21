import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";

const router = express.Router();

//routing
router.post("/login", loginController);
router.post("/register", registerController);
// hi
export default router;
