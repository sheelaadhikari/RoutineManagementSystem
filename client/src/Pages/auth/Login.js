import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventdefault();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h4 className="title">Login Page</h4>

        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
            placeholder=" Enter Your Email"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            id="exampleInputPassword"
            placeholder="Enter Your Password"
            required
          />
        </div>

        <div mb-3>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <div className="mb-3">
          <p
            type="button"
            className="forgot-password"
            onClick={() => {
              navigate("/forgot-password");
            }}
          >
            Forgot Password?
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
