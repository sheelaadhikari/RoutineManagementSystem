import React, { useEffect } from 'react'
import { useAuth } from '../../context/auths';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [auth] = useAuth();

  const navigate = useNavigate();

  const logoutUser = () => {
    return localStorage.removeItem('auth');
  }
  useEffect(() => {
    logoutUser();
    navigate('/');
  })
  
  return (
    <div>

    </div>
  )
}

export default Logout