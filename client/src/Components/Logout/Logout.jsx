import React, { useEffect } from 'react';
import { useAuth } from '../../context/auths';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [auth, setAuth] = useAuth();
  const { isLoggedIn } = auth;
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem('auth');
    // Update the auth context state to reflect logout
    setAuth((prevAuth) => ({ ...prevAuth,user:null, token:' ', isLoggedIn: false }));
  };

  useEffect(() => {
    if (isLoggedIn) {
      logoutUser();
      navigate('/');
    }
  }, []);

  return (
    <div>
    </div>
  );
};

export default Logout;
