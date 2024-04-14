import express from "express";
import { newuserController } from "../controllers/newuserController.js";
import { acceptinvitationController } from "../controllers/acceptinvitationController.js";
const router= express.Router();

router.post("/mail", newuserController)
router.post("/accept-invitation",acceptinvitationController)
export default router;
// test