// creating routine of first semester BCA

import bcafModel from "../models/bcafModel.js";
export const bcafcrController = async (req, res) => {
  try {
    const programname = req.body.programname;
    const semester = req.body.semester;
    const time = req.body.time;
    const subject = req.body.subject;
    const teacher = req.body.teacher;
    const day = req.body.day;
    //validation
    if (!programname) {
      return res.send({ message: "programname is required" });
    }
    if (!semester) {
      return res.send({ message: "semester is required" });
    }
    if (!time) {
      return res.send({ message: "time is required" });
    }
    if (!subject) {
      return res.send({ message: "subject is required" });
    }
    if (!teacher) {
      return res.send({ message: "teacher is required" });
    }
    if (!day) {
      return res.send({ message: "day is required" });
    }
    const bcafroutine = new bcafModel({
      programname: programname,
      semester: semester,
      time: time,
      subject: subject,
      teacher: teacher,
      day: day,
    });
    await bcafroutine.save();
    res.status(201).send({
      success: true,
      message: "Routine of BCA first semester created successfully",
      bcafroutine,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "somthing went wrong",
      error,
    });
  }
};
