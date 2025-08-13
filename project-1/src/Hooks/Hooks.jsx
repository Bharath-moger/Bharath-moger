import React, { useState } from 'react'
import UContext from './uContext'
import { Uref } from './uref'
import { UMemo } from './uMemo'
import { UEffect } from './uEffect'
import { UReducer } from './uReducer'

export default function Hooks() {
  const [count, setCount] = useState(0)
  return (
    <>
    <p>parent component</p>
    <p>{count}</p>
    <button onClick={()=>{setCount(count+1)}}>click</button>
    <UContext/>
    <Uref/>
    <UMemo/>
    <UEffect/>
    <UReducer/>
    </>
  )
}
