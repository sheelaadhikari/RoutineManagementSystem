import mongoose from "mongoose";
const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("department",departmentSchema);
// test