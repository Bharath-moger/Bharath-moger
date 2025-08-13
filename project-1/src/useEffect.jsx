import React, { useEffect, useState } from 'react'
import UEffect from './Hooks/uContext';

export default function UseEffect() {

const [count, setCount] = useState(0)
useEffect(() => {console.log("inside useEffect:", count); }, [count])
// console.log("outside useEffect:", count);

const [date, setdate] = useState("")
useEffect(()=>{
setInterval(()=>{
// const updatedDate = new Date();
setdate(new Date().toLocaleString())
// console.log("hello")
},1000)},[])
// console.log("outside ");

//clean up fuction
// const [timer, setTimer] = useState(0);
// useEffect(()=>{
//    const time=setInterval(()=>{setTimer((prev)=>prev+1)},1000)
//     return()=>{clearInterval(time)}
// },[])
// console.log(timer);

 return (
        <>
        <h1>use effect</h1>
            <button onClick={() => { setCount(count + 1) }}>button</button>
            <p>date is : {date}</p>
            {/* <h2>timer</h2>
            <p>{timer}</p> */}
            
        </>


    )
}
