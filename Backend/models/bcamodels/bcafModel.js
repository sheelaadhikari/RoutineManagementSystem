import mongoose from "mongoose";
const bcafSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the user model
    required: true,
  },
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
      startTime: {
        type: Date,
        required: true,
      },
      endTime: {
        type: Date,
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
});

export default mongoose.model("Bcafsem", bcafSchema);
