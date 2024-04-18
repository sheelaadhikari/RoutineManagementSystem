import { jwtDecode } from "jwt-decode";
import userModel from "../models/userModel.js";
import { hashPassword } from "../helpers/authHelper.js";

export const acceptinvitationController = async (req, res) => {

  try {
    const username=req.body.username;
    const newPassword = req.body.newPassword;
    const confirmPassword = req.body.confirmPassword;
    const token = req.body.token;
    if (!token) {
        return res.status(400).json({ success: false, message: 'Token is missing' });
      }
    const decodedToken = jwtDecode(token);

    const email = decodedToken.email;
    console.log("the email is", email);
    if(!username)
    return res.send("username is required")
    if (!newPassword) {
      return res.send("new password is required");
    }
    if (!confirmPassword) {
      return res.send("confirm password is required");
    }
    if (newPassword !== confirmPassword) {
      return res.status(200).send({
        success: false,
        message: "Password didn't match",
      });
    }
  

    const existingUser = await userModel.findOne({ email: email });

    //exsiting  user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already registered please Login",
      });
    }

    // Register users with password hashing
    const hashedPassword = await hashPassword(confirmPassword);

    // Save user into the database
    const users = new userModel({
      username: username,
      email: email,
      password: hashedPassword,
      // phone: phone,
      // pincode: pincode,
    });
    const savedUser = await users.save();
   return res.status(201).send({
      success: true,
      message: "User rgistered successfully",
      users: savedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
        sucess: false,
        message: "Something went wrong",
        error,
      });
  }
};
