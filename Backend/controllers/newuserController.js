import { json } from "express";
import nodemailer from "nodemailer";
import newuserModel from "../models/newuserModel.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";


export const newuserController = async (req, res) => {
  var { email } = req.body;
  if (!email) {
    return res.send({
      success: false,
      message: "email is required",
    });
  }
  const existingUser = await userModel.findOne({ email: email });


  const token = await JWT.sign({ email: email }, process.env.JWT_SECRET, {
    expiresIn: "200d",
  });  //exsiting  user
  if (existingUser) {
    return res.status(400).send({
      source: false,
      message: "this email is already registered",
    });
  }

  try {
  
    // Save user into the database
    const newusers = new newuserModel({
      email: email,
    });
    const savednewUser = await newusers.save();
    res.status(201).send({
      success: true,
      message: "Invitation link is sent to the given email",
      users: savednewUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Failed to send email invite",
      error,
    });
  }

  async function sendMail() {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rmsystem1000@gmail.com",
        pass: "mlraeeqqxricxyjo",
      },
    });

    const mailOptions = {
      from: "rmsystem1000@gmail.com", // sender address
      to: email, // list of receivers
      subject: "rms", // Subject line
      text: "Routinemanagementsystem", // plain text body
      html: ` press on this link to accept invitation http://localhost:5173/accept-invitation?token=${token}`, // html body
    };

    try {
      const result = await transporter.sendMail(mailOptions);
      console.log("email sent successfully");
    } catch (error) {
      console.log("email sent failed", error);
    }
  }
  sendMail();
};
// test
