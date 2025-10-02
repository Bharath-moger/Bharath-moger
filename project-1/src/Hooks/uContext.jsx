import React, { useContext } from 'react'
import { MyContext } from '../Context-api/userContext'

export default function UContext() {
  const {contextVar,num} = useContext(MyContext)
  return (
    <>
    <h1>useContext()</h1>
    <h2>{num} time i am creating  {contextVar }</h2>
    </>
  )
}

