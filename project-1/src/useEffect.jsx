import React, { useEffect, useState } from 'react'
import UEffect from './Hooks/uContext';

export default function UseEffect() {

    const [count, setCount] = useState(0)
    useEffect(() => { console.log("inside useEffect:", count); }, [count])

    useEffect(() => {
        document.title = `count ${count}`
    }, [count])

    const [date, setdate] = useState("")
    useEffect(() => {
    const date = setInterval(() => {
            // const updatedDate = new Date();
            setdate(new Date().toLocaleString())
            // console.log("hello")
        }, 1000)
        return()=>{clearInterval(date)}
    }, [])
    // console.log("outside ");

    // //clean up fuction
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        const time = setInterval(() => { setTimer((prev) => prev + 1) }, 1000)
        return () => { clearInterval(time) }
    }, [])

//      useEffect(() => {
//     if (timer >= 10) {
//       setTimer(10); // freeze at 10
//    }
//   }, [timer]);
//    console.log("timer render",timer);
    

    return (
        <>
            <h1>use effect</h1>
            <h2>count {count}</h2>
            <button onClick={() => { setCount(count + 1) }}>button</button>
            <p>date is : {date}</p>
            {timer <= 10 ? <h1>timer is : {timer}</h1> : <h1>timer end</h1>}  {/* stop timer after 10  */}
           {/* <h1>timer is : {timer}</h1> */}
            <button onClick={()=>setTimer((0))}>reset timer</button>
            {/* <button onClick={handleStop}>stop timer</button> */}
        </>)
}

//Chat GPT
// import React, { useEffect, useState, useRef } from 'react';

// export default function UseEffect() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("inside useEffect:", count);
//     document.title = `count ${count}`;
//   }, [count]);

//   const [date, setDate] = useState("");
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDate(new Date().toLocaleString());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const [timer, setTimer] = useState(0);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setTimer(prev => prev + 1);
//     }, 1000);

//     return () => clearInterval(intervalRef.current);
//   }, []);

//   useEffect(() => {
//     if (timer >= 10) {
//       clearInterval(intervalRef.current); // stop when reaches 10
//     }
//   }, [timer]);

//   const handleReset = () => {
//     clearInterval(intervalRef.current);
//     setTimer(0);
//     intervalRef.current = setInterval(() => {
//       setTimer(prev => prev + 1);
//     }, 1000);
//   };
// //    console.log("timer render",timer);

//   return (
//     <>
//       <h1>useEffect Example</h1>

//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>

//       <p>Date is: {date}</p>

//       {timer <= 10 ? <h1>Timer is: {timer}</h1> : <h1>Timer End</h1>}

//       <button onClick={handleReset}>Reset Timer</button>
//     </>
//   );
// }
