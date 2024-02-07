import express from "express";
import { loginController } from "../controllers/authController.js";
const router = express.Router();

//routing
router.post("/login", loginController);
// hi
export default router;
