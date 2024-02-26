/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [pincode, setPincode] = useState("");
  const navigate = useNavigate();

const handleSubmit= async(e)=>{

e.preventDefault();
try{
    const res= await axios.post("http://localhost:8001/api/v1/auth/forgot-password", {
        email,
        newPassword,
        pincode,
      });

      if(res&&res.data.success){
        toast.success(res.data && res.data.message);
        navigate("/")
      }
      else{
        toast.error(res.data.message)
      }

}
catch(error){
    console.log(error);
    toast.error("something went wrong")

}
}

  return (
    <div>
      <div className="form">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col mt-4 space-y-16 font-bold relative text-xs md:text-base"
        >
          <div className="inputbox relative">
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="p-1 border-b border-blue-700 w-full focus:border-blue-700 outline-none"
              
            />
            <span className="absolute left-0 px-2">Enter Your Email</span>
          </div>
          <div className="inputbox relative">
            <input
              type="password"
              value={pincode}
              onChange={(e) => {
                setPincode(e.target.value);
              }}
              className="p-1 border-b border-blue-700 w-full focus:border-blue-700 outline-none"
           
            />
            <span className="absolute left-0 py-4 px-2"> Enter your pincode</span>
          </div>
          <div className="inputbox relative">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              className="p-1 border-b border-blue-700 w-full focus:border-blue-700 outline-none"
            />
            <span className="absolute left-0 py-4 px-2"> Enter Your New Password</span>
          </div>

          <button
            type="submit"
            className="bg-custom-blue-300 text-black font-bold p-2 w-[82%] m-auto rounded-2xl"
          >
           Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
