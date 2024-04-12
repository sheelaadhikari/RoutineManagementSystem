// /* eslint-disable react-refresh/only-export-components */
// import { useState, useEffect, useContext, createContext } from "react";

// const AuthContext = createContext();

// const AuthProvider = ({children}) => {
//   const [auth, setAuth] = useState({
//     user: null,
//     token: "",
//     isLoggedIn: undefined,
//   });

//   useEffect(() => {
//     const data = localStorage.getItem("auth");
//     if (data) {
//       const parseData = JSON.parse(data);
//       setAuth({
//         ...auth,
//         user: parseData.user,
//         token: parseData.token,
//         isLoggedIn: true,
//       });
//     } else {
//       setAuth({ ...auth, isLoggedIn: false });
//     }
//   }, []);

// // console.log("context",auth);
// // const [auth, setAuth] = useState({
// //   user: null,
// //   token: "",
// //   isLoggedIn: undefined,
// // });
// // const [loading, setLoading] = useState(true); // Add loading state

// // useEffect(() => {
// //   const data = localStorage.getItem("auth");
// //   if (data) {
// //     const parseData = JSON.parse(data);
// //     setAuth({
// //       ...auth,
// //       user: parseData.user,
// //       token: parseData.token,
// //       isLoggedIn: true,
// //     });
// //   } else {
// //     setAuth({ ...auth, isLoggedIn: false });
// //   }
// //   setLoading(false); // Set loading to false after initialization
// // }, []);

// console.log("context", auth);

// // if (loading) {
// //   // Render a loading indicator until authentication state is initialized
// //   return <div>Loading...</div>;
// // }
//   return (
//     <AuthContext.Provider value={[auth, setAuth]}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

//context hook
// const useAuth = () => useContext(AuthContext);
// export { useAuth, AuthProvider };

// AuthProvider.js
import React, { useState, useEffect, useContext } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
    isLoggedIn: false,
  });

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
        isLoggedIn: true,
      });
    }
  }, []);
console.log("context", auth);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };