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

// import React, { useState, useMemo } from "react";

// export const UMemo = () => {
//   const [items, setItems] = useState([100, 200, 300]); // initial prices
//   const [newItem, setNewItem] = useState(""); // input state
//   const [coupon, setCoupon] = useState("");

//   // Calculate total price only when items change
//   const total = useMemo(() => {
//     console.log("Calculating total...");
//     return items.reduce((sum, price) => sum + price, 0);
//   }, [items]);

//   // Add new item to items array
//   const addItem = () => {
//     if (newItem.trim() !== "" && !isNaN(newItem)) {
//       setItems([...items, Number(newItem)]); // push new number
//       setNewItem(""); // clear input
//     }
//   };

//   return (
//     <div>
//       <h2>🛒 Cart Total: {total}</h2>

//       {/* Input for adding new item */}
//       <input
//         type="number"
//         placeholder="Enter item price"
//         value={newItem}
//         onChange={(e) => setNewItem(e.target.value)}
//       />
//       <button onClick={addItem}>➕ Add Item</button>

//       {/* Input for coupon (just extra input field) */}
//       <br /><br />
//       <input
//         type="text"
//         placeholder="Enter Coupon"
//         value={coupon}
//         onChange={(e) => setCoupon(e.target.value)}
//       />

//       {/* Show items */}
//       <h3>Items in Cart:</h3>
//       <ul>
//         {items.map((price, index) => (
//           <li key={index}>₹{price}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
