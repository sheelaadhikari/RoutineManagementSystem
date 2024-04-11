import { json } from "express";
import nodemailer from "nodemailer";
import newuserModel from "../models/newuserModel.js";

export const newuserController = async (req, res) => {
   var { email } = req.body;
  try {
   
    if (!email) {
      return res.send({ message: "Email is required" });
    }

    // Save user into the database
    const newusers = new newuserModel({
      email: email,
    });
    const savednewUser = await newusers.save();
    res.status(201).send({
      success: true,
      message: "new user made  successfully",
      users: savednewUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "failed to make new user",
      error,
    });
  }

  
  async function sendMail(){

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
      html: "Routinemanagementsystem", // html body
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
