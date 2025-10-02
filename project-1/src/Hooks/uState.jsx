import React, { useState } from 'react'

export default function UState() {
  const [count, setCount] = useState(0)

  const [input, setInput] = useState("")

  const [deatails, setDetails] = useState({ name: "bharath", age: 20 })

  const user = [
    {
      name: "Bharath",
      age: 20
    },
    {
      name: "Sharath",
      age: 21
    },
    {
      name: "ram",
      age: 22
    },
    {
      name: "raj",
      age: 19
    }
  ]
  
  const [data , setdata] = useState(user);

  //derived state: any variable whose value totaly defends on state variable then it's called derived state 
  const usercount = data.length;
  const avgAge = data.reduce((prev,curr)=>prev+curr.age,0)/usercount  //0 is initial value for prev element

  //useState Challenge
  const [count1, setCount1] = useState(0)
const [stepup, setStepup] = useState(0)

  return (
    <>
      <br />
      <br />
      <button onClick={() => { setCount(count + 1) }}>increment</button>
      <button onClick={() => { setCount(count - 1) }}>decrement</button><br />
      <input type="text" onChange={(e) => { setInput(e.target.value) }} />
      <h2>name is {input} number is {count}</h2>
      <h1>name is {deatails.name} and age is {deatails.age}</h1>
      <button onClick={() => { setDetails({ ...deatails, name: "sharath", age: 21 }) }}>update</button>  {/* flower brace required bca its object */}
      {/* <div>
        {user.map((data) =>
          <p>Name is {data.name} and {data.age} years old</p>
        )}
      </div> */}
      <div>
        {data.map((data,key) =>
          <p key={key}>Name is {data.name} and {data.age} years old</p>
        )}
      </div>

      {/* derived state */}
      <p>number of users : {usercount}</p>
      <p>average age is : {avgAge}</p>
      <h1>useState Challenge</h1>
      <p>count:{count1}</p>
      <input type="number" value={stepup} onChange={(e)=>{setStepup(Number(e.target.value))}}/><br /><br /> 
      <button onClick={()=>{setCount1(count1+stepup)}} disabled={count1>=100}>Increment</button>
      <button onClick={()=>{setCount1(count1-stepup)}} disabled={count1<=0}>Decrement</button>
      <button onClick={()=>{setCount1(0)}}>Reset</button>
    </>
  )
}
