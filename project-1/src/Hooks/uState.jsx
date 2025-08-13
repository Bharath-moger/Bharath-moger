import React, { useState } from 'react'

export default function UState() {
    const [count, setCount] = useState(0)
    
    const[input, setInput] = useState("")

    const [deatails, setDetails]= useState({name:"bharath",
                                            age:20
                                           })

  return (
    <>
    <br />
    <br />
    <button onClick={()=>{setCount(count+1)}}>increment</button>
    <button onClick={()=>{setCount(count-1)}}>decrement</button><br />
    <input type="text" onChange={(e)=>{setInput(e.target.value)}} />
    <h2>name is {input} number is {count}</h2>
    <h1>name is {deatails.name} and age is {deatails.age}</h1>
    <button onClick={()=>{setDetails({...deatails,name:"sharath",age:21})}}>update</button>
    </>
  )
}
