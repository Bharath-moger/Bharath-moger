import React from 'react'
import moreReason from '../api/moreReason.json'
import './moreReason.css'
export default function MoreReason() {
  return (
    <div className="moreReason-main">
        <h1>More reasons to join</h1>
        <div className="reasons">
            {
                moreReason.map((reason,ind)=>{
                 return(
                 <div className="reason" key={ind}>
                 <h1>{reason.heading}</h1>
                 <p>{reason.para}</p>
                 <img src={reason.img} alt="" />
                 </div>)
                })
            }
        </div>
    </div>
  )
}
