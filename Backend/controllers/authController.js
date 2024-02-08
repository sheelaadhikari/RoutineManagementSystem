import userModel from "../models/userModel.js";
import { hashPassword } from "./../helpers/authHelper.js";

export const registerController = async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;

    //validation
    if (!username) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }
    if (!phone) {
      return res.send({ message: "Phone Number is required" });
    }

    //check user

    const existingUser = await userModel.findOne({ email: email });

    //exsiting  user
    if (existingUser) {
      return res.status(200).send({
        source: false,
        message: "Already registered please Login",
      });
    }

    // Register users with password hashing
    const hashedPassword = await hashPassword(password);

    // Save user into the database
    const users = new userModel({
      username: username,
      email: email,
      password: hashedPassword,
      phone: phone,
    });
    const savedUser = await users.save();
    res.status(201).send({
      success: true,
      message: "User rgistered successfully",
      users: savedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Registration failed",
      error,
    });
  }
};

// Login controller

export const loginController = async (req, res) => {
  try {
    console.log("This is login Controller");
  } catch {}
};
