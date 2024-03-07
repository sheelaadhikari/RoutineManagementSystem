import express from "express";
import {
  isSuperAdmin,
  requireSignIn,
} from "../../middlewares/authMiddleware.js";
import {
  createBcafController,
  deletebcafrController,
  getAllBcafController,
  getRoutineByDayController,
  updatebcafrController,
} from "../../controllers/bcacontrollers/bcafsemController.js";
const router = express.Router();

//creating  bca first semester routine routes
//routes for creating routine
router.post(
  "/create-bcafroutine",
  requireSignIn,
  isSuperAdmin,
  createBcafController
);

// // get all routine of first sem bca
router.get("/get-bcafroutine", getAllBcafController);

// // get single day routine of first sem bca
router.get("/get-singledr/:day", getRoutineByDayController);

// // delete all routine of first sem bca
router.delete("/delete-bcafroutine", deletebcafrController);

// // update all routine of first sem bca
router.put(
  "/update-bcafroutine",
  requireSignIn,
  isSuperAdmin,
  updatebcafrController
);
export default router;
