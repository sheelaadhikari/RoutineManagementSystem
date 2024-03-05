import mongoose from "mongoose";
const bcafSchema = new mongoose.Schema(
  {
    programname: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },

    subject: {
      type: String,
      required: true,
    },
    teacher: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Bcafsem", bcafSchema);
