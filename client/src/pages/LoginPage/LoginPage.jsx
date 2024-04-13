/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from "react";
import "../LoginPage/LoginPage.css";
import keyImage from "../../images/key.png"; // Adjust the path based on your directory structure
import userImage from "../../images/user.png";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auths";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const[auth,setAuth]=useAuth();
  const {isLoggedIn}=auth;

  useEffect(() => {
  console.log("authloginpage", isLoggedIn);
    if (isLoggedIn) {
      navigate('/user/home');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8001/api/v1/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        
        localStorage.setItem("auth", JSON.stringify(res.data));
        axios.defaults.headers.common["Authorization"] = res.data.token;
        setAuth((prevAuth) => ({ ...prevAuth, user: res.data.user, token: res.data.token, isLoggedIn: true }));
        
        // navigate(location.state || "/home ");
        navigate('/user/home');
      } else {
        toast.error(res.data.message);
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
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="p-1 border-b border-blue-700 w-full focus:border-blue-700 outline-none"
                  placeholder=""
                />
                <span className="absolute left-0 px-2">Username</span>
                <img src={userImage} className="w-4 absolute right-7 top-1" />
              </div>

              <div className="inputbox relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="p-1 border-b border-blue-700 w-full focus:border-blue-700 outline-none"
                  placeholder=""
                />
                <span className="absolute left-0 py-4 px-2">Password</span>
                <img
                  src={keyImage}
                  className="w-5 absolute right-7 top-1 bg-transparent"
                />
              </div>
              <div className="loginbtn space-y-7">
              <div className="forgot flex justify-end ">
                <Link to='/forgot-password'>Forgot Password?</Link>
              </div>
                <div className="flex justify-center">
                <button
                type="submit"
                className=" bg-custom-blue-300 text-black font-bold p-2 w-[82%] m-auto rounded-2xl"
              >
                LOGIN
              </button>
                </div>
              
              </div>
             
            </form>
          </div>
        
        </div>

        <div className="right bg-custom-blue-300 border border-custom-blue-400 rounded-xl md:w-1/3 flex flex-col justify-center items-center space-y-12 p-5 text-xs md:text-base">
          <div className="title font-bold">Login Here</div>
          <div className="eclipse flex justify-center w-44 h-44 rounded-full items-center">
            <div className="ecli flex justify-center w-26 h-26 rounded-full items-center">
              <LockIcon className="lockicon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;