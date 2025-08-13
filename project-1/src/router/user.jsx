import React from 'react'
import { NavLink } from "react-router-dom"


export default function User() {
  return (
    <>
    <h1>THIS IS User PAGE</h1>
    <NavLink to="/button"><button>button</button></NavLink>
    </>

  )
}