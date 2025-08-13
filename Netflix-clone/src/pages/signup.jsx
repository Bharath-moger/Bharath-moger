import React from 'react'
import "./signup.css"
import { FinishSignupButton, Header } from '../Components/buttom'
import { NavLink } from "react-router-dom"
export default function Signup() {
  return (
    <>
      <div className="signup-container">
        <Header/>
        <div className="subscription-card">
          <div className="subscription-content">
            <img width={60} src="https://www.shutterstock.com/shutterstock/photos/1048665290/display_1500/stock-vector-red-check-mark-icon-in-a-circle-check-list-button-icon-1048665290.jpg" alt="" />
            <p>STEP 1 OF 4</p>
            <h1>Choose your plan.</h1>
            <div className="sub-details"><img width={25} src="https://img.icons8.com/?size=100&id=82769&format=png&color=FA5252" alt="" /> <p className="sub-p">No commitments , cancel anytime.</p> </div>
            <div className="sub-details"><img width={25} src="https://img.icons8.com/?size=100&id=82769&format=png&color=FA5252" alt="" /> <p className="sub-p">Everything on Netflix for a low price</p> </div>
            <div className="sub-details"><img width={25} src="https://img.icons8.com/?size=100&id=82769&format=png&color=FA5252" alt="" /> <p className="sub-p">No ads and no extra fees anything.</p> </div>
            <NavLink to="/plan">
               <FinishSignupButton name={`NEXT`}/>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}
