import React from 'react'
import { ExportVariable } from '../App';
export function ES6() {

    //1st arrow function
const arrow = (a)=>{
    return(
        <>
          <h1>{a} Welcome to ECMASCRIPT</h1>
        </>
    )
}

    //2nd variables let const var
var a = 10; //can be re-declared and re-initialized
var a = 20;
a=50;

let b = 20; // can re-declared but cant re-initialized
// let b = 30; // error
b= 30;

const c = 30; // cannot be re-declaredv and re-initialized
// c= 20; error

    //3rd MAP
    let myArray = ["one","two","three","four",/* {
        five:"5",
        six:"6"
    } */]
    

    //4TH DESTUCTURING
    let deArray=["apple","mango","banana","orange"];
    let [ap,m,ba,o]=deArray;

    const deObj = {
        obj1:"object-one",
        obj2:"object-two",
        obj3:"object-three",
        obj4:"object-four"
    }
    let {obj1,obj2,obj3,obj4} = deObj
    
    //5TH MODULES
    //we export the variable from app.jsx Exportvariable

    //Spread operator
    let spredArr1 = [1,2,3,4];
    let spredArr2 = [5,6,7,8];
    let combineArr = [...spredArr1,...spredArr2];

    // rest parameter
    const restFunction =((...values)=>{
        let sum = 0;
        for (const value of values) {
            sum += value;
        }
        return(
            <>
            <h1>{sum}</h1>
            </>
        )
    })

  return (
    <>
    {arrow("BHARATH")}

    <h1>{a} {b} {c}</h1>


    <h1>{ap} {m} {ba} {o}</h1>

    <p>{obj1} {obj2} {obj3} {obj4}</p>

    <h2>{ExportVariable}</h2>

    <h2>{combineArr}</h2>

    {myArray.map((ele)=>{
        // console.log(ele);
        return(
       <h1 key={ele}>{ele}</h1>
            )})}

    { restFunction(1,2,3,4,5,6,100) }   
    </>
  )
}
