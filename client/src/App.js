import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/auth/Login.js";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
