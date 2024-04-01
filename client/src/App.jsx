/* eslint-disable no-unused-vars */
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";



import ForgotPassword from "./pages/LoginPage/ForgotPassword";
import Login from "./pages/LoginPage/LoginPage";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
