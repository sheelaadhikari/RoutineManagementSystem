/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const AcceptInvitation = () => {
  const [username, setUsername] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
const searchString=window.location.search;
const searchParams=new URLSearchParams(searchString);
const token=searchParams.get("token");


    try {
      const res = await axios.post(
        "http://localhost:8001/api/v1/newuser/accept-invitation",
        {
          username,
          newPassword,
          confirmPassword,
          token,
        }
      );
console.log("data",res.data)
if(res.data.success){
  toast("Accepted Invitation",{success:true})
  navigate("/");


}

    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <div className="login w-full md:w-screen h-screen flex items-center justify-center bg-custom-blue-400 ">
      <div className="wrapper flex flex-col md:flex-row rounded-xl border border-blue-700 w-full md:w-[80%] lg:w-[60%] xl:w-[50%] mx-4 md:mx-0">
        <div className="left m-6 mb-14 p-4 md:w-2/3">
          <div className="form">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col mt-4 space-y-14 font-bold relative text-xs md:text-base"
            >
             <div className="inputbox relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className="p-1 border-b border-blue-700 w-full focus:border-blue-700 outline-none"
                  placeholder=""
                />
                <span className="absolute left-0 py-4 px-2">Username</span>
              </div>
              <div className="inputbox relative">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                  className="p-1 border-b border-blue-700 w-full focus:border-blue-700 outline-none"
                  placeholder=""
                />
                <span className="absolute left-0 py-4 px-2">New Password</span>
              </div>
              <div className="inputbox relative">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  className="p-1 border-b border-blue-700 w-full focus:border-blue-700 outline-none"
                  placeholder=""
                />
                <span className="absolute left-0 py-4 px-2">Confirm Password</span>
              </div>
              <div className="btn space-y-7">
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-custom-blue-300 text-black font-bold p-2 w-[82%] m-auto rounded-2xl"
                  >
                    Accept Invitation
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptInvitation;
