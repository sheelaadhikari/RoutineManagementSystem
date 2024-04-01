import bcasModel from "../../models/bcamodels/bcasModel.js";

export const createBcasController = async (req, res) => {
  try {
    const routinesData = req.body;

    // Validate input data
    for (const routineData of routinesData) {
      const { userID, programname, semester, day, periods } = routineData;

      if (
        !userID ||
        !programname ||
        !semester ||
        !day ||
        !periods ||
        periods.length === 0
      ) {
        return res.status(400).json({
          error: "All fields are required, and periods array must not be empty",
        });
      }

      // Validate each period
      for (const period of periods) {
        const { startTime, endTime, subject, teacher } = period;

        if (!startTime || !endTime || !subject || !teacher) {
          return res
            .status(400)
            .json({ error: "All fields in each period are required" });
        }
      }

      // Create a new Bcafsem document for each routine
      const bcasSemester = new bcasModel({
        userID,
        programname,
        semester,
        day,
        periods,
      });

      // Save the document to the database
      await bcasSemester.save();
    }

    res.status(201).json({
      message: "Routines of BCA second semester created successfully",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// getting all routine of bca second semester
export const getAllBcasController = async (req, res) => {
  try {
    // Fetch all routines from the database
    const routines = await bcasModel.find();

    res.status(200).json(routines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// // get single day routine of bca second semester
export const getRoutineByDayController = async (req, res) => {
  try {
    const singleroutine = await bcasModel
      .findOne({ day: req.params.day })
      .select("periods")
      .populate("day");

    if (singleroutine) {
      res.status(200).send({
        success: true,
        message: "singleday routine of bca second semester fetched",
        singleroutine,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "routine",
        teacher,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// // delete  all the routine of bca second semester
export const deleteBcasrController = async (req, res) => {
  try {
    const semesterToDelete = "1";

    await bcasModel.deleteMany({ semester: semesterToDelete });

    res.status(200).send({
      success: true,
      message: `Deleted all routines for BCA second semester (${semesterToDelete}) successfully`,
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

// // bca first sem
// // update the routine
export const updateBcasrController = async (req, res) => {
  try {
    const routinesData = req.body;

    // Validate input data
    for (const routineData of routinesData) {
      const { userID, programname, semester, day, periods } = routineData;

      if (
        !userID ||
        !programname ||
        !semester ||
        !day ||
        !periods ||
        periods.length === 0
      ) {
        return res.status(400).json({
          error: "All fields are required, and periods array must not be empty",
        });
      }

      // Validate each period
      for (const period of periods) {
        const { startTime, endTime, subject, teacher } = period;

        if (!startTime || !endTime || !subject || !teacher) {
          return res
            .status(400)
            .json({ error: "All fields in each period are required" });
        }
      }

      // Find the routine by userID and day
      const existingRoutine = await bcasModel.findOneAndUpdate(
        { userID, day },
        { ...routineData },
        { new: true, upsert: true }
      );
    }

    // Send a single response after all routines have been updated
    res.status(200).send({
      success: true,
      message: "Routines updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};
