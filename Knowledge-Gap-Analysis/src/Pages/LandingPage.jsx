import React, { useState } from "react";
import Login from "./Login";
import "./LandingPage.css"
import { LandpageContent } from "../components/LandpageContent";

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (user) => {
    setUsername(user);
    setIsLoggedIn(true);
    // console.log(user);  
   };
// console.log(username);

  return (  
    <>
      {!isLoggedIn ? (<Login onLogin={handleLogin} />) : 
      (<LandpageContent name={username}/>)}
    </>
  );
}