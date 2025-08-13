import React from 'react'
import './footer.css'
import {FinishSignupButton, LanguageButton} from '../Components/buttom'
import { NavLink } from 'react-router-dom'


export default function Footer() {
  return (
    <div className="footer-main">
      
    <NavLink to="/finish">
        <FinishSignupButton name={"Finish Sign-Up >"}/>
        </NavLink>
    <p>Questions? Call 000-800-919-1743</p>
    <table>
      <tbody>
      <tr>
      <td>FAQ</td>
      <td>Help Center</td>
      <td id='vanish'>Account</td>
      <td id='vanish'>Media Center</td>
      </tr>
      <tr>
      <td>Investor Relation</td>
      <td>jobs</td>
      <td id='vanish'>Ways to Watch</td>
      <td id='vanish'>Terms and condtion</td>
      </tr>
      <tr>
      <td>privacy</td>
      <td>Cookie Performance</td>
      <td id='vanish'>Corporate Information</td>
      <td id='vanish'>Contact Us</td>
      </tr>
      <tr>
      <td>Speed Test</td>
      <td>Legal Notice</td>
      <td id='vanish'>Only on Netflix</td>
      </tr>
      </tbody>
      </table>
       <div> <LanguageButton/></div>
      <p>NETFLIXX INDIA</p>
    </div>
  )
}
