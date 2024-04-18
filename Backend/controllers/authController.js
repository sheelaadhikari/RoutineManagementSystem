import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    // const phone = req.body.phone;
    // const pincode = req.body.pincode;

  // validation
    if (!username) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }
    // if (!phone) {
    //   return res.send({ message: "Phone Number is required" });
    // }
    // if (!pincode) {
    //   return res.send({ message: "Pincode Number is required" });
    // }

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
      // phone: phone,
      // pincode: pincode,
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
    const email = req.body.email;
    const password = req.body.password;
    // validation
    if (!email || !password) {
      return res.send({
        success: false,
        message: "Invalid email or password",
      });
    }

    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid password",
      });
    }
    // creating jwt token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "100d",
    });
    res.status(200).send({
      success: true,
      message: "login successfull",
      user: {
        username: user.username,
        email: user.email,
        phone: user.phone,
        // role: user.role,
        // pincode: user.pincode,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "error in Login",
      error,
    });
  }
};

// fortgot password controller
export const forgotPasswordController = async (req, res) => {
  try {
    const { email, pincode, newPassword } = req.body;
    if (!email) {
      res.status(400).send({
        message: "Email is required",
      });
    }
    if (!pincode) {
      res.status(400).send({
        message: "Pincode is required",
      });
    }
    if (!newPassword) {
      res.status(400).send({
        message: "New Password is required",
      });
    }

    // check user
    const user = await userModel.findOne({ email, pincode });
    // validation
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "wrong email or pincode",
      });
    }

    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "password reset successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "something went wrong",
      error,
    });
  }
};

// CRUD application of admin 
export const getAllMembersController=async(req,res)=>{
  
    try {
        const allMembers = await userModel
          .find({})
          .populate("_id")
          .sort({ createdAt: -1 });
        res.status(200).send({
          countTotal: allMembers.length,
          success: true,
          message: "all registered members",
          allMembers,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "error in getting  all registered members",
          error: error.message,
        });
      }
    };
  // get single admin
  export const getSingleAdminController=async(req,res)=>{
    try {
        const singleAdmin = await userModel
          .findOne({ username:req.params.username })
          .populate("_id");
        if (singleAdmin) {
          res.status(200).send({
            success: true,
            message: " single admin fetched",
           singleAdmin,
          });
        } else {
          res.status(404).send({
            success: false,
            message: "The admin is not available",
           singleAdmin,
          });
        }
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "error while getting single admin",
          error,
        });
      }
    };
    // delete admin
    export const deleteMemberController=async(req,res)=>{
      try {
          const member = await userModel.findByIdAndDelete(req.params.id).select("username");
      
          if (!member) {
            return res.status(404).send({
              success: false,
              message: "The admin is not found",
            });
          }
          
          res.status(200).send({
            success: true,
            message: "Deleted admin successfully",
            member,
          });
        } catch (error) {
          console.log(error);
          res.status(500).send({
            success: false,
            message: "Error while deleting the admin",
            error,
          });}}
  // update admin
  export const updateMemberController = async (req, res) => {
    console.log("hello")
    try {
      const { username} = req.body;
      //validation
        if(!username){
          return res.status(400).send({ error: "Name is Required" });
        }
       
  
      const member = await userModel.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );
           res.status(200).send({
        success: true,
        message: "Admin updated successfully",
        member,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "something went worng",
        error,
      });
    }
  };