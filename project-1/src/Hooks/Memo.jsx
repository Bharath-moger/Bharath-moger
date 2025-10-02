import React from 'react'
import { memo } from 'react'
import { useRef } from 'react'

export const Memo = memo(({value,data}) => {
    const countRef = useRef(0)
  return (
    <>
    <h1>React.Memo()</h1>
    <h4>page rendered {countRef.current++}</h4>
    <h4>{data.name}-{data.age}</h4> 
    </>
  )
}
)