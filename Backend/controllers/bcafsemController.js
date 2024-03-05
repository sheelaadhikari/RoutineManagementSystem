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
