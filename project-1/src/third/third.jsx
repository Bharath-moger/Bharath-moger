import React from "react";
import "./third.css"
const Third=()=>{
return(
<div className="third">
    <div className="third-sub-1">
        <p className="headings">My request</p>
        <p className="headings">My approval</p>
        <p className="headings">Recently Processed request</p>
        <p className="headings">All Processed Contract</p>
    </div>
    <div className="third-sub-2">
        <p className="heading-2">Contract Name</p>
        <p className="heading-2">Borroer Name</p>
        <p className="heading-2">Request Type</p>
        <p className="heading-2">Due Date</p>
        <p className="heading-2">Request Status</p>
    </div>
    <div className="third-sub-3">
        <p className="details">Loan Agreement -NGEN</p>
        <p className="details">NextGen Enterprise</p>
        <p className="details">Review</p>
        <p className="details">287th Aug 2019</p>
        <button className="green">Assigned</button>
    </div>
    <div className="third-sub-3">
        <p className="details">Loan Agreement -Game</p>
        <p className="details">Game Technology</p>
        <p className="details">Approval</p>
        <p className="details">20th Aug 2019</p>
        <button className="green">Assigned</button>
    </div>
    <div className="third-sub-3">
        <p className="details">Loan Agreement -Tag</p>
        <p className="details">Tag Corp.</p>
        <p className="details">Review</p>
        <p className="details">17th Aug 2019</p>
        <button className="orange">In Progress</button>
    </div>
    <div className="third-sub-3">
        <p className="details">Loan Agreement -New LLC</p>
        <p className="details">New LLC</p>
        <p className="details">Sign-off</p>
        <p className="details">10th Aug 2019</p>
        <button className="red">Overdue</button>
    </div>
</div>
)
}
export default Third
