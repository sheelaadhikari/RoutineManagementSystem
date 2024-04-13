import express from "express";
import { deleteDepartmentController, departmentController, getDepartmentController, getSingleDepartmentController, updateDepartmentController } from "../controllers/departmentController.js";

const router = express.Router();
//create department
router.post("/d-name", departmentController);
//get department
router.get("/getdepartment", getDepartmentController);
router.get("/getsingledepartment/:name", getSingleDepartmentController);
router.delete("/deletedepartment/:id", deleteDepartmentController);
router.put("/updatedepartment/:id", updateDepartmentController);



export default router;
