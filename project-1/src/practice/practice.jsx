import React, { version } from "react";
import Details from "../Props/props";
const Prcatice = () => {

            const number1 = 100
      const myfunction = (val)=>{
          return <h1>this is function {val}</h1>
      }

      const bharath = () =>{
      return(
          <>
          <h1>this is embeded heading</h1>
          <p>this is embeded paragraph</p>
          </>
      )
  }

  //condition
  //1st type
//   const condition = ()=>{
//     const age = prompt("Enter you age");
//     return(
//            <h1>{ age>=18 ? "Adult" : "Child" }</h1>
//     )
//   }
   //2nd type


      
    //calss and object
    // class Car {
    //     constructor(name) {
    //         this.brand = name;
    //     }
    // start(){
    //     return 'car can start'
    // }
    // stop(){
    //     return 'car can stop'
    // }

    // }
    // const mycar = new Car("Toyota");
    
    // class toyota extends Car{
    //     constructor(name){
    //         super(name)
    //         this.carName = name;
    //     }
    // }
    // const mycar1 = new toyota("Fortuner")

//arrow function
const Arrow = ()=>{
    return "This is arrow function";
}
const Sum = (val1,val2)=>{
    return (`sum is ${val1+val2}`)
}

//Rest operator
// const number = (a,b)=>{
//     return `${a} and ${b}`
// }


const number = (...numbers)=>{
       return numbers
     }
//spread operator
let myArray1 = [1,2,3,4,5];
let myArray2 = [6,7,8,9,10]
let myArray3 = [0,...myArray1,...myArray2] //array cocantination

let myObj1={
    name:"bharath"
};
let myObj2={
    age: 20
};
let myObj3 = {...myObj1,...myObj2}
console.log(myObj3);

//array method MAP
const array1 ={
    data1:[
    {name:"sudeep"},
    {sname:"patgar"},
    {fname:"sudeep patgar"},
    {age:21},]
 };

 const student = [{
        name:"bharath",
        age: 20
    },
    {
        name:"sharath",
        age: 21
    },
    {
        name:"ram",
        age: 22
    }]

 const students = [{
       stuednt1:["bharath",20]
        
    },
    {
        stuednt2:["sharth",22]
    },
    {
        stuednt3:["sudeep",21]
    }]
   
 return (
        <div>
            {/* {array1.data.map((i,index)=>{
                return(
                    <div key={index}>
               <div>
               {i.fname}
               </div>
               </div>
                )
            })} */}

            
            {/* {
                array1.data1.map((i,idx)=>{
                return(
                <div key={idx}>
                    {i.name}
                    {i.sname}
                    {i.fname}
                    {i.age}
                    
                    </div>
                    )
                })
            } */}


            {/* {
                student.map((i,idx)=>{
                    return(
                        <div key={idx}>
                            <p>{i.name}</p>
                            <p>{i.age}</p>
                        </div>
                    )
                })
            } */}

             {
                students.map((i)=>{
                    return(
                        <div>
                        {i.stuednt1}
                        {i.stuednt2}
                        {i.stuednt3}
                        </div>
                    )

                })
             }
            {/* {array1.data.map((val,idx)=>{
                return(
                    <div key={idx}>
                    <h1>{val.fname}</h1> <h1>{val.sname}</h1>
                    
                    
                    </div>
                )
            })} */}
            

            {/* <h1>my car brand is {mycar.brand}</h1>
            <h1>my car is {mycar.brand} {mycar1.carName}</h1>
            <p>{mycar.start()}</p>
            <p>{mycar1.stop()}</p>
            <Arrow/>
            <p>{Sum(1,2)}</p>   */}
            {/* <Details sentitem={propArray}/> */}

           {/* <h1> {number(1,2,3,4,5)}</h1>  using rest operator can pass any number of arguments to function */}
           {/* <h1> {number(1,2,3,4,5)}</h1>   
           <p>{myArray3}</p>                       //spread operator
           <p>name is {myObj3.name}</p> 
           <p>age is {myObj3.age}</p>  */}
            <h1>{number1}</h1>
    {myfunction(1)}
    {/* <bharath/>       can't able to call like <bharath/> */}
    {bharath()}
    {/* {condition()} */}
    <h1>{version}</h1>
        </div>
    )
    
    
}
export default Prcatice





