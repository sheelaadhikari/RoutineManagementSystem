import express from "express";
import {
  forgotPasswordController,
  loginController,
  registerController,
} from "../controllers/authController.js";
import { isSuperAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

//routing
router.post("/login", loginController);
router.post("/register", registerController);
router.post("/forgot-password", forgotPasswordController);

//protected user routes auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// hi

//protected admin routes auth
router.get("/admin-auth", requireSignIn, isSuperAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;
