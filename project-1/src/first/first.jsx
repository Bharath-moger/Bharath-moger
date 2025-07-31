import React from "react";
import "./first.css"
import Second from "../second/second";
const First=()=>{
 return(
    <>
    <div className="first">
        <div className="first-sub">
                <img src="https://img.icons8.com/?size=100&id=82775&format=png&color=000000" alt="" />
            
            <div className="sub1">
                <p className="number">322</p>
                <p className="text">Completed</p>
            </div>
        </div>
        <div className="first-sub">
            <img src="https://img.icons8.com/?size=100&id=82775&format=png&color=000000" alt="" />
            <div className="sub1">
                <p className="number">208</p>
                <p className="text">Active</p>
            </div>
        </div>
        <div className="first-sub">
            <img src="https://img.icons8.com/?size=100&id=82775&format=png&color=000000" alt="" />
            <div className="sub1">
                <p className="number">85</p>
                <p className="text">Review</p>
            </div>
        </div>
        <div className="first-sub">
            <img src="https://img.icons8.com/?size=100&id=82775&format=png&color=000000" alt="" />
            <div className="sub1">
                <p className="number">48</p>
                <p className="text">Approval</p>
            </div>
        </div>
        <div className="first-sub">
            <img src="https://img.icons8.com/?size=100&id=82775&format=png&color=000000" alt="" />
            <div className="sub1">
                <p className="number">72</p>
                <p className="text">Signature</p>
            </div>
        </div>
    </div>
          <Second/>
          </>
 )
}
export  default First