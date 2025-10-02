import React, { useMemo, useState } from 'react'
import { Uref } from './uref'
import { UMemo } from './uMemo'
import { UEffect } from './uEffect'
import { UReducer } from './uReducer'
import { UCallback } from './uCallback'
import { MyContextProvider } from '../Context-api/userContext'
import UContext from './uContext'
import { Memo } from './Memo'

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
    <h1>parent component</h1>
    <p>{count}</p>
    <button onClick={()=>{setCount(count+1)}}>click</button>
    <Memo value="bharath" data={biodata}/>
    <MyContextProvider>
    <Uref data={biodata}/>
    <UMemo/>
    <UEffect/>
    <UReducer/>
    <UCallback/>
    <UContext/>
    </MyContextProvider>
    </>
  )
}
