import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [userType, setUserType] = useState("employee");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password && userType) {
      if (userType === "admin") {
        if (username === "KO192G4" && password === "admin") {
          setErrorMessage("");
          navigate("/admin-portal");
          alert("Login successful!");
        } else {
          setErrorMessage("Invalid username or password");
        }
      } else if (userType === "employee") {
        if (username === "KO192H9" && password === "pass") {
          setErrorMessage("");
          navigate("/employee-portal");
          alert("Login successful!");
        } else {
          setErrorMessage("Invalid username or password");
        }
      }
    }
  };

  return (
    <div className="app-background w-full h-full flex justify-center items-center">
      <div className="login-container ">
        <h1 className="font-bold text-lg">Login</h1>

        <div className="user-type">
          <label>
            <input
              type="radio"
              value="admin"
              checked={userType === "admin"}
              onChange={() => setUserType("admin")}
            />
            Admin
          </label>

          <label>
            <input
              type="radio"
              value="employee"
              checked={userType === "employee"}
              onChange={() => setUserType("employee")}
            />
            Employee
          </label>
        </div>

        <div className="input-fields">
          <label>KOID</label>

          <input
            required
            type="text"
            placeholder="Enter KOID"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <br />

          <br />

          <label className="mr-2">Password</label>

          <input
            required
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <br />

        <button
          className="rounded bg-gray-700 p-2 text-white w-full"
          onClick={handleLogin}
        >
          Login
        </button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default LoginPage;
