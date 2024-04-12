import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { useAuth } from '../../context/auths';

const PrivateRoute = () => {
  const [{isLoggedIn}]=useAuth();
  console.log(isLoggedIn);

   return isLoggedIn ? <Outlet /> : <Navigate to="/" />;

}

export default PrivateRoute