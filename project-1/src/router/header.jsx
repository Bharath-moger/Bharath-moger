import React from 'react'
import { NavLink } from "react-router-dom"
export default function Header() {
  return (
    <nav>
      <NavLink className={({isActive})=>{
        return(
          isActive ? "a" : "b"
        )
      }} to="/">home</NavLink><br />
      <NavLink to="about">about</NavLink><br />
      <NavLink to="user">user</NavLink><br />
      <NavLink to="contact">contact</NavLink><br />
      <NavLink to="state">useState</NavLink><br />
      <NavLink to="FormHandling">FormHandling</NavLink><br />
      <NavLink to="netflix">netflix</NavLink><br />
      <NavLink to="effect">useEffect</NavLink><br />
      <NavLink to="hooks">Hooks</NavLink><br />
      <NavLink to="API">API practice</NavLink><br />
    </nav>
  )
}
