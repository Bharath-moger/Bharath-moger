import React, { useEffect, useState } from 'react'
import UState from './Hooks/uState';

export default function State() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => { setCount(count + 1) }

  const [name, setName] = useState("bharath")
  let isName = name;
  const handleNameChange = () =>isName == "bharath" ? setName("sudeep") : setName("bharath")

  let nameArray = ["a","b","c","d"]
  const [array, setArray] = useState(nameArray)
  const handleClear =()=>{setArray([])}
  

  
  // const handleChange =()=>{setArray1(nameArray1.forEach((val1)=>{return(val1)}))}
  
  let nameArray1 = ["a","b","c","d","e","f"]
  const [array1, setArray1] = useState( -1)
  const handleChange=()=>{setArray1(()=>array1+1)}
  
  
  const handleInnerClear=()=>{
    setArray1(()=>{nameArray1[array1]=""})
   }

   
   // dealing with object
   let stateObj = {
     name:"barath",
     age:"21",
     branch:"Bca"
    }
    
    const [obj, setObj] = useState(stateObj)
    
    const handleUpdate =()=>{
      //  setObj({name:"sudeep",age:20,branch:"Diploma"})  //setobj contain obj and if we  want to update the value we need to pass that obj In case if only one value need to cahnge then use ...spred opertor
      setObj({...stateObj,name:"sudeep",branch:"diploma"})
    }
    useEffect(()=>{
  console.log("changevalue",nameArray1[array1]);
  
    },[obj])
    
  const [date, setDate] = useState("")
  


  //toggle switch
    return (
    <>
      <h1>React useState()</h1>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <h1>name is {name}</h1>
      <button onClick={handleNameChange}>Change</button>
      {array.map((val,idx)=>{
        return(
          <h1 key={idx}>{val} <button onClick={handleInnerClear}>clear</button></h1> )})}
      <button onClick={handleClear}>clear</button>

      <h1>{nameArray1[array1]}</h1>
      <button onClick={handleChange}>change name</button>

      <h1>name is {obj.name} {obj.age} years old from {obj.branch}</h1>
      <button onClick={handleUpdate}>update</button>

      <h1>click below to get date </h1>
      <h1>{date}</h1>
      <button onClick={()=>{setDate(Date())}}>date</button>
      <UState/>
    </>
  )
}
