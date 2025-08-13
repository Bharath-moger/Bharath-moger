import React from 'react'
import './home.css'
import {FinishSignupButton, LanguageButton} from "../Components/buttom"
import { NavLink } from "react-router-dom"

export default function Home() {



  return (
    <div className='Homepage-main-container'>
    <div className="header">
        <h1 id='netflix'>NETFLIXX</h1>
        <div className="button-container">
            <button id='sign-up'>Sign Out</button>
            <LanguageButton/>
        </div>
    </div>
    <div className="home-content">
        <h1>Unlimited movies, TV <br /> shows and more</h1>
        <p>Starts at ₹149. Cancel at any time.</p>
        <NavLink to="/finish">
                <FinishSignupButton name={"Finish Sign-Up >"}/>
        
        </NavLink>
        
        
    </div>
    </div>
  )
}
  //reausable button component


// // pages/Home.js
// import React from 'react';
// import './home.css';
// import { LanguageButton } from '../Components/buttom';
// import { NavLink } from 'react-router-dom';

// export default function Home() {
//   return (
//     <div className='Homepage-main-container'>
//       <div className="header">
//         <h1 id='netflix'>NETFLIXX</h1>
//         <div className="button-container">
//           <button id='sign-up'>Sign Out</button>
//           <LanguageButton />
//         </div>
//       </div>
//       <div className="home-content">
//         <h1>Unlimited movies, TV <br /> shows and more</h1>
//         <p>Starts at ₹149. Cancel at any time.</p>
//         <NavLink to="/finish">
//           <button>Sign Up</button>
//         </NavLink>
//         {/* Uncomment this if needed: <FinishSignupButton /> */}
//       </div>
//     </div>
//   );
// }

