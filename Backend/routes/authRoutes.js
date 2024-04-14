import express from "express";
import {
  forgotPasswordController,
  getAllMembersController,
  loginController,
  registerController,
} from "../controllers/authController.js";

const router = express.Router();

//routing
router.post("/login", loginController);
router.post("/register", registerController);
router.post("/forgot-password", forgotPasswordController);


// User ko CRUD application where only Superadmin with role 1 is authorized to do CRUD of Admins with role 0
router.get("/get-all-members",getAllMembersController)
export default router;
