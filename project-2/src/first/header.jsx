import React from "react";
import "./header.css"
const First = ()=>{
 return(
    <div className="first-container">
      <h1 id="h1">Cloudo</h1>
      <div className="sidebar-items">
      <img src="https://img.icons8.com/?size=100&id=uWyVYfqqdYxW&format=png&color=000000" alt="" />
      <p className="side-p">
         Dashboard
      </p>
      </div>
      <div className="sidebar-items">
      <img src="https://img.icons8.com/?size=100&id=tAfqdu2AVpjT&format=png&color=000000" alt="" />
      <p className="side-p">
         Favorite
      </p>
      </div>
      <div className="sidebar-items">
      <img src="https://img.icons8.com/?size=100&id=82713&format=png&color=000000" alt="" />
      <p className="side-p">
         Shared
      </p>
      </div>
      <div className="sidebar-items">
      <img src="https://img.icons8.com/?size=100&id=87371&format=png&color=000000" alt="" />
      <p className="side-p">
         Recycle Bin
      </p>
      </div>
      <div className="sidebar-items">
      <img src="https://img.icons8.com/?size=100&id=102475&format=png&color=000000" alt="" />
      <p className="side-p">
         Deep Cleen
      </p>
      </div>
      <div className="sidebar-items">
      <img src="https://img.icons8.com/?size=100&id=82535&format=png&color=000000" alt="" />
      <p className="side-p">
         Setting
      </p>
      </div>
      <img src="https://cdn.vectorstock.com/i/500p/52/79/businessman-flies-on-a-rocket-and-points-his-hand-vector-53965279.jpg" alt="" className="side-image" />
      <p className="small-text">Upgrade to <span>Pro</span> for <br />unlimited storage</p> 
      <p className="blue">Upgrade Now</p>
    </div>
 )
}
export default First