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
    day: {
      type: String,
      required: true,
    },
    periods: [
      {
        time: {
          type: String,
          required: true,
        },
        period: {
          type: Number,
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
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model("Bcafsem", bcafSchema);
