import React, { useMemo, useState } from 'react'
import UContext from './uContext'
import { Uref } from './uref'
import { UMemo } from './uMemo'
import { UEffect } from './uEffect'
import { UReducer } from './uReducer'
import { UCallback } from './uCallback'

export default function Hooks() {
  const [count, setCount] = useState(0)

  //when we are passing object as props then use memo not working we need help of useMemo()
  // const biodata = {
  //   name :"bharath",
  //   age:21
  // }
  const biodata = useMemo(()=>{
    return{
       name :"bharath",
      age:21
    }
  },[])
  return (
    <>
    <p>parent component</p>
    <p>{count}</p>
    <button onClick={()=>{setCount(count+1)}}>click</button>
    <UContext/>
    <Uref data={biodata}/>
    <UMemo/>
    <UEffect/>
    <UReducer/>
    <UCallback/>
    </>
  )
}
