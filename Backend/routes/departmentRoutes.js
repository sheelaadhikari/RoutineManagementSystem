import express from "express";
import { deleteDepartmentController, departmentController, getDepartmentController, getSingleDepartmentController, updateDepartmentController } from "../controllers/departmentController.js";

const router = express.Router();
//create department
router.post("/d-name", departmentController);
//get  all department
router.get("/getdepartment", getDepartmentController);
//get single department
router.get("/getsingledepartment/:name", getSingleDepartmentController);
//delete department
router.delete("/deletedepartment/:id", deleteDepartmentController);
// update department
router.put("/updatedepartment/:id", updateDepartmentController);



export default router;
