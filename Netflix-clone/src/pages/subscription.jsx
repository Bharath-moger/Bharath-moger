import React from 'react'
import { FinishSignupButton, Header } from '../Components/buttom'
import subPlan from "../api/subPlan.json"
import "./subscription.css"
import { NavLink } from 'react-router-dom'
function Subscription() {
  return (
    <>
    <div className="subscription-main">
    <Header/>
    <div className="subscription-container-main">
    <div className="subscription-container">
        <p>STEP 2 OF 4</p>
        <h1>Choose the plan thst's right for you</h1>
        <div className="subscription-card-container">
        {
        subPlan.map((val)=>{return(
             <div className="subscriptions-card">
                <div className="card-first-part">
                    <h2>{val.name}</h2>
                    <h3>{val.resolution}</h3>
                </div>
                <div className="card-part">
                    <p className='light'>{val.mprice}</p>
                    <p className='dark' >{val.price}</p>
                </div>
                <div className="car-part">
                    <p className='light'>{val.vnsQuality}</p>
                    <p className='dark' >{val.quality}</p>
                </div>
                <div className="card-part">
                    <p className='light'>{val.res}</p>
                    <p className='dark' >{val.resolution}</p>
                </div>
                <div className="card-part">
                    <p className='light'>{val.dSupport}</p>
                    <p className='dark' >{val.d}</p>
                </div>
                <div className="card-part">
                    <p className='light'>{val.dsame}</p>
                    <p className='dark'>{val.ds}</p>
                </div>
                <div className="card-part">
                    <p className='light'>{val.download}</p>
                    <p className='dark' >{val.dw}</p>
                </div>
            </div>)

        })}
            

        </div>
    </div>
    </div>
    <div className='next-button-container'>

    <NavLink to="/payment">
               <FinishSignupButton name={`NEXT`}/>
            </NavLink>
    </div>
    </div>
    
  </>
  )
}

export default Subscription