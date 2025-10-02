import React, { useReducer } from 'react'

export const UReducer = () => {

  // const reducer = (state, action) => {
  //   // return action.value === "INC" ? state + 1 : state - 1;  //return is important  //initial value stored in state and object(inside dispatch) stored in action 
  //   if(action.value==="INC" || action.value==="DEC"){
  //     if(action.value==="INC"){
  //     return state+1;
  //   }
  //   else{
  //     return state-1;
  //   }
  // }
  // else{
  //   return state=0;
  // }

  // }

  //IN THE COmPLEX PROBLEM THERE MAY A LOT OF INITIAL VALUE LIKE FORM DATA NAME PASS EMAIL ETC..
  const initialState = {
    count: 0,
    inc: 2,
    dec: 2
  }

  const reducer = (state, action) => {
console.log(action);

    switch (action.value) {
      case "INC":
        return { ...state, count: state.count + 1 };
      case "DEC":
        return { ...state, count: state.count - 1 };
      case "RES":
        return { ...state, count: 0 };
      case "INC2":
        return { ...state, count: state.count+state.inc };
      case "DEC2":
        return { ...state, count: state.count-state.dec };

      default:
        return state;
    }

  }
  const [istate, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h1>useReducer()</h1>
      <p>{istate.count}</p>
      <button onClick={() => { dispatch({ value: "INC" }) }}>inc</button>
      <button onClick={() => { dispatch({ value: "DEC" }) }}>dec</button>
      <button onClick={() => { dispatch({ value: "RES" }) }}>reset</button>
      <button onClick={() => { dispatch({ value: "INC2" }) }}>INC2</button>
      <button onClick={() => { dispatch({ value: "DEC2" }) }}>DEC2</button>
    </>
  )
}
