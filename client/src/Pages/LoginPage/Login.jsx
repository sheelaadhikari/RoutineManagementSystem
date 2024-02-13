import React, { useState } from 'react'
import './Login.css';
import keyImage from '../../images/key.png'; // Adjust the path based on your directory structure
import userImage from '../../images/user.png'
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {

    const [credential, setCredential] = useState({});

    const handleChange = (e) => {
        setCredential(prevInfo => ({ ...prevInfo, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(credential);
    }
    return (
        <div className='login w-full md:w-screen h-screen flex items-center justify-center bg-custom-blue-400 '>
        <div className="wrapper flex flex-col md:flex-row rounded-xl border border-blue-700 w-full md:w-[80%] lg:w-[60%] xl:w-[50%] mx-4 md:mx-0 ">
          <div className="left m-6 mb-14 p-2 md:w-2/3">
            <div className="form">
              <form onSubmit={handleSubmit} className='flex flex-col mt-4 space-y-14 font-bold relative text-xs md:text-base'>
      
                <div className="inputbox relative">
                  <input type='text' name="username" onChange={handleChange} className='p-4 border-b border-blue-700 w-full focus:border-blue-700 outline-none' />
                  <span className='absolute left-0 py-4 px-2'>Username</span>
                  <img src={userImage} className='w-4 absolute right-7 top-5'/>
                </div>
      
                <div className="inputbox relative">
                  <input type='password' name="password" onChange={handleChange} className='p-4 border-b border-blue-700 w-full focus:border-blue-700 outline-none' />
                  <span className='absolute left-0 py-4 px-2'>Password</span>
                  <img src={keyImage} className='w-5 absolute right-7 top-5 bg-transparent'/>
                </div>
      
                <button className='bg-custom-blue-300 text-black font-bold p-2 w-[82%] m-auto rounded-2xl'>LOGIN</button>
              </form>
            </div>
          </div>
      
          <div className="right bg-custom-blue-300 border border-custom-blue-400 rounded-xl md:w-1/3 flex flex-col justify-center items-center space-y-12 p-5 text-xs md:text-base">
            <div className="title font-bold">Login Here</div>
            <div className="eclipse flex justify-center w-44 h-44 rounded-full items-center">
              <div className="ecli flex justify-center w-26 h-26 rounded-full items-center">
                <LockIcon className='lockicon'/>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      
    )
}

export default Login





