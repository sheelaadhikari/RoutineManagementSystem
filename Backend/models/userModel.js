import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    
    },
    role: {
      type: Number,
      default: 0,
    },
    // pincode: {
    //   type: Number,
    // },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("users", userSchema);
