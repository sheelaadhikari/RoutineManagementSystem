import express from "express";
import {
  forgotPasswordController,
  loginController,
  registerController,
} from "../controllers/authController.js";

const router = express.Router();

//routing
router.post("/login", loginController);
router.post("/register", registerController);
router.post("/forgot-password", forgotPasswordController);

// hi
export default router;
