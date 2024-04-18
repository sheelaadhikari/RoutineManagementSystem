import mongoose from "mongoose";
const newuserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
   
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("newusers", newuserSchema);
// test