// import React from 'react'

// export const LandingPage = () => {
//   return (
//     <div className="landing-page-main"> 

//     </div>
//   )
// }

import React, { useState } from "react";
import "./Login.css";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter both username and password");
      return;
    }

    // Demo auth — replace with real logic later
    if (username === "Bharath" ||username ==="Sudeep" && password === "1234") {
      setError("enter both username and password");
      onLogin?.(username);
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="card">
        <h2 className="title">Frontend Dev Eligibility Test</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit} className="form">
          <label className="label">
            Username
            <input
              type="text"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </label>

          <label className="label">
            Password
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </label>

          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
}
