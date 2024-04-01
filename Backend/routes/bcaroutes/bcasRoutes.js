import express from "express";
import {
  isSuperAdmin,
  requireSignIn,
} from "../../middlewares/authMiddleware.js";
import {
  createBcasController,
  deleteBcasrController,
  getAllBcasController,
  getRoutineByDayController,
  updateBcasrController,
} from "../../controllers/bcacontrollers/bcassemController.js";
const router = express.Router();

// routes for creating bca second semester routine
router.post(
  "/create-bcasRoutine",
  requireSignIn,
  isSuperAdmin,
  createBcasController
);
// routes for getting all routines of  bca second semester
router.get(
  "/get-bcasRoutine",
  requireSignIn,
  isSuperAdmin,
  getAllBcasController
);

// routes to get single day routine
router.get(
  "/get-singledrs/:day",
  requireSignIn,
  isSuperAdmin,
  getRoutineByDayController
);

// delete the routine of second semester
router.delete(
  "/delete-bcasRoutine",
  requireSignIn,
  isSuperAdmin,
  deleteBcasrController
);

// // update all routine of second sem bca
router.put(
  "/update-bcasRoutine",
  requireSignIn,
  isSuperAdmin,
  updateBcasrController
);
export default router;
