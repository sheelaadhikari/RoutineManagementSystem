import bcafModel from "../../models/bcamodels/bcafModel.js";

export const createBcafController = async (req, res) => {
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
      const bcafSemester = new bcafModel({
        userID,
        programname,
        semester,
        day,
        periods,
      });

      // Save the document to the database
      await bcafSemester.save();
    }

    res.status(201).json({ message: "Routines created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// // bca first semester
// // getting all routines

export const getAllBcafController = async (req, res) => {
  try {
    // Fetch all routines from the database
    const routines = await bcafModel.find();

    res.status(200).json(routines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// //bca first semester
// // get single day routine
export const getRoutineByDayController = async (req, res) => {
  try {
    const singleroutine = await bcafModel
      .findOne({ day: req.params.day })
      .select("periods")
      .populate("day");

    if (singleroutine) {
      res.status(200).send({
        success: true,
        message: "singleday routine fetched",
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

// //bca first semester
// // delete  all the routine of bca first semester
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

// // bca first sem
// // update the routine
export const updatebcafrController = async (req, res) => {
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
      const existingRoutine = await bcafModel.findOneAndUpdate(
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
