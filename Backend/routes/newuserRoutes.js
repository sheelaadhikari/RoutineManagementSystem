import express from "express";
import { newuserController } from "../controllers/newuserController.js";
const router= express.Router();

router.post("/mail", newuserController)
export default router;
// test