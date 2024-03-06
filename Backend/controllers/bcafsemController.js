import bcafModel from "../models/bcafModel.js";
import BcaFirstModel from "../models/bcafModel.js";

export const bcafcrController = async (req, res) => {
  try {
    const routines = req.body;

    // Validate if routines array is present
    if (!Array.isArray(routines) || routines.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid data format" });
    }

    // Iterate through each routine in the array
    for (const routine of routines) {
      const { programname, semester, periods, day } = routine;

      // Validation for each routine
      if (!programname || !semester || !periods || !day) {
        return res.status(400).json({
          success: false,
          message: "All fields are required for each routine.",
        });
      }

      // Validate each period in the 'periods' array
      for (const period of periods) {
        const { time, subject, teacher } = period;
        if (!time || !subject || !teacher) {
          return res.status(400).json({
            success: false,
            message: "Each period must have 'time', 'subject', and 'teacher'.",
          });
        }
      }

      // Create a new document using the BcaFirstModel
      const bcaFirstRoutine = new BcaFirstModel({
        programname,
        semester,
        periods,
        day,
      });

      // Save the document to the database
      await bcaFirstRoutine.save();
    }

    res.status(201).json({
      success: true,
      message: "Routines of BCA first semester created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

// bca first semester
// getting all routines
export const getbcafrController = async (req, res) => {
  try {
    const bcafroutine = await bcafModel
      .find({})
      .populate({
        path: "periods.subject",
        select: "time period subject teacher _id",
      })
      .select("programname semester day periods createdAt updatedAt __v")
      .limit(12)
      .sort({ createdAt: -1 });

    res.status(200).send({
      countTotal: bcafroutine.length,
      success: true,
      message: "all routine",
      bcafroutine,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "something went wrong",
      error: error.message,
    });
  }
};

//bca first semester
// get single day routine
export const getSinglebcafrController = async (req, res) => {
  try {
    const day = req.params.day;
    const bcafsr = await bcafModel
      .findOne({ day })
      .select("programname semester day periods createdAt updatedAt __v")
      .populate({
        path: "periods.subject",
        select: "time period subject teacher _id",
      });

    if (bcafsr) {
      res.status(200).send({
        success: true,
        message: ` routine for ${day}`,
        bcafsr,
      });
    } else {
      return res.status(404).send({
        success: false,
        message: ` routine for ${day} not found`,
        bcafsr: null,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting single day routine",
      error,
    });
  }
};

//bca first semester
// delete  all the routine of bca first semester
export const deletebcafrController = async (req, res) => {
  try {
    const semesterToDelete = "1";

    await bcafModel.deleteMany({ semester: semesterToDelete });

    res.status(200).send({
      success: true,
      message: `Deleted all routines for BCA first semester (${semesterToDelete}) successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting all routines",
      error: error.message,
    });
  }
};

// bca first sem
// update the routine
export const updatebcafrController = async (req, res) => {
  try {
    const routines = req.body;

    // Validate if routines array is present
    if (!Array.isArray(routines) || routines.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid data format" });
    }

    // Iterate through each routine in the array
    for (const routine of routines) {
      const { programname, semester, periods, day } = routine;

      // Validation for each routine
      if (!programname || !semester || !periods || !day) {
        return res.status(400).json({
          success: false,
          message: "All fields are required for each routine.",
        });
      }

      // Validate each period in the 'periods' array
      for (const period of periods) {
        const { time, subject, teacher } = period;
        if (!time || !subject || !teacher) {
          return res.status(400).json({
            success: false,
            message: "Each period must have 'time', 'subject', and 'teacher'.",
          });
        }
      }

      // Delete existing routine for the specified day
      await BcaFirstModel.deleteOne({ day: day });

      // Create a new document using the BcaFirstModel
      const bcaFirstRoutine = new BcaFirstModel({
        programname,
        semester,
        periods,
        day,
      });

      // Save the document to the database
      await bcaFirstRoutine.save();
    }

    res.status(201).json({
      success: true,
      message: "Routines of BCA first semester updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};
