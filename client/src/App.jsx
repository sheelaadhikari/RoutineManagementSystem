/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;