// import './faq.css'
// import frequent from '../api/frequent.json'
// export default function Faq() {
//   return (
//     <div className="faq-main-container">
//         <h1>Frequently Asked Questions</h1>
//         {frequent.map((quetion,idx)=>{
//             return(
//                 <div key={idx} className='faq-div'>
//                     <p id='quetion'>{quetion.q}</p>
//                     <p id='plus'>{quetion.plus}</p>
//                 </div>
                    
//             )
//         })}
//     </div>
//   )
// }
import './faq.css'
import frequent from '../api/frequent.json'
import { useState } from 'react'
export default function Faq() {

const [activeidx, setActiveidx] = useState(null)  

const handleOnclick = (idx)=>{
  setActiveidx(prevIndex=> prevIndex === idx ? null : idx)
  console.log(activeidx);
  
}

  return (
    <div className="faq-main-container">
        <h1>Frequently Asked Questions</h1>
        {frequent.map((val,idx)=>(
          <Faqitem
           quetion={val.q}
           answer={val.a}
           key={idx}
           isActive={activeidx == idx}
           onclick={()=>handleOnclick(idx)}
          />
        ))}
    </div>
  )
}


const Faqitem = ({quetion,answer,onclick,isActive}) =>{
  return(<div className={`faq-div ${isActive ? 'active' : ''}`} onClick={onclick}>
  <div className="faq-quetion" >{quetion}<span>{isActive?'-':'+'}</span></div>
  <div className="faq-answer">{isActive && <p> {answer}</p>}</div>
  </div>)
}