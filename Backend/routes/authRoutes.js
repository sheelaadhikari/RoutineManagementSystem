import express from "express";
import {
  deleteMemberController,
  forgotPasswordController,
  getAllMembersController,
  getSingleAdminController,
  loginController,
  registerController,
  updateMemberController,
} from "../controllers/authController.js";

const router = express.Router();

//routing
router.post("/login", loginController);
router.post("/register", registerController);
router.post("/forgot-password", forgotPasswordController);


// User ko CRUD application where only Superadmin with role 1 is authorized to do CRUD of Admins with role 0
router.get("/get-all-members",getAllMembersController)
router.get("/get-single-member/:username",getSingleAdminController)
router.delete("/delete-member/:id",deleteMemberController)

router.put("/update-member/:id",updateMemberController)

export default router;
