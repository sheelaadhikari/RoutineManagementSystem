import departmentModel from "../models/departmentModel.js"; // Make sure to add the file extension


//create department
export const departmentController = async (req, res) => {
    try {
        const { name } = req.body;
    
        // Validation
        if (!name) {
          return res.status(400).send({ error: "Name is required" });
        }
    
        // Check if department with the same name already exists
        const existingDepartment = await departmentModel.findOne({ name });
        if (existingDepartment) {
          return res.status(400).send({ error: "Department with this name already exists" });
        }
    
        // Create new department
        const department = new departmentModel({ name });
        await department.save();
    
        res.status(201).send({
          success: true,
          message: "Department created successfully",
          department: department,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Something went wrong",
          error: error,
        });
      }
};
// get all department
export const getDepartmentController= async(req,res)=>{
    try {
        const alldepartments = await departmentModel
          .find({})
          .populate("_id")
          .sort({ createdAt: -1 });
        res.status(200).send({
          countTotal: alldepartments.length,
          success: true,
          message: "all departments",
          alldepartments,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "error in getting  all deparments",
          error: error.message,
        });
      }
    };

// get single deparment
export const getSingleDepartmentController=async(req,res)=>{
    try {
        const singledepartment = await departmentModel
          .findOne({ name:req.params.name })
          .populate("_id");
        if (singledepartment) {
          res.status(200).send({
            success: true,
            message: " single department fetched",
           singledepartment,
          });
        } else {
          res.status(404).send({
            success: false,
            message: "department is  not found",
           singledepartment,
          });
        }
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "error while getting single teacher",
          error,
        });
      }
    };
// delete Department 
export const deleteDepartmentController=async(req,res)=>{
    try {
        const department = await departmentModel.findByIdAndDelete(req.params.id).select("name");
    
        if (!department) {
          return res.status(404).send({
            success: false,
            message: "Department not found",
          });
        }
        
        res.status(200).send({
          success: true,
          message: "Deleted department successfully",
          deletedDepartment: department,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error while deleting department",
          error,
        });}}


        //update department
export const updateDepartmentController = async (req, res) => {
    console.log("hello")
    try {
      const { name} = req.body;
      //validation
        if(!name){
          return res.status(400).send({ error: "Name is Required" });
        }
       
  
      const department = await departmentModel.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );
           res.status(200).send({
        success: true,
        message: "department updated successfully",
        department,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "something went worng",
        error,
      });
    }
  };