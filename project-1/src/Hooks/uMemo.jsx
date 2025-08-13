import React, { useMemo, useState } from 'react'

 const ExpensiveCalculation = ()=> {
    const sumFunctiom =()=>{
    let sum = 0;
    console.log("sum calculating");
    for (let i = 0; i < 1000; i++) {
      sum = sum +i;
    }
    console.log("sum calculated");
    return sum

  }
  const sum = useMemo(()=>{
    return sumFunctiom()
  },[])
   
// const sum = sumFunctiom();
return(
    <h1>Expensive Calculation is {sum}</h1>
   )}

export const UMemo = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => { setCount(count + 1) }
return (
    <>
    <br />
    <h1>useMemo()</h1>
    <ExpensiveCalculation/>
      <h1>count is {count}</h1>
      <button onClick={handleIncrement}>inc</button>
      
    </>
  )
}

