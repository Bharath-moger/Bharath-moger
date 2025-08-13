import React, { useState } from 'react';
import './payment.css';

function Payment() {
  
  let userPayment = {
  cardnumber:"",
  expdate:"",
  cvv:"",
  firstname:"",
  lastname:""
}
 
  const [payment, setpayment] = useState(userPayment)
 const{cardnumber,expdate,cvv,firstname,lastname}=payment
 
 const handleChange = (event)=>{
  const{name,value}=event.target;
  setpayment((prev)=>({...prev,[name]:value}))
 }

 const handleFormSubmit = (evt) =>{
evt.preventDefault();
  const paymentData = {
    cardnumber,
    expdate,
    cvv,
    firstname,
    lastname
  }
  console.log(paymentData);
  
 }

 
  return (
    <div className="container">
      <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" className="logo" />
      </header>

      <div className="card-form">
        <a href="#" className="back-link">← Change payment method</a>
        <h2>Update your credit or debit card.</h2>

        <div className="card-icons">
          <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
          <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" />
          <img src="https://img.icons8.com/ios-filled/50/000000/bank-card-back-side.png" alt="Card" />
        </div>

        <form onSubmit={handleFormSubmit}>
          <input name='cardnumber' type="text" placeholder="Card number" value={cardnumber} /* disabled */ onChange={handleChange} required/>
          <input name='expdate' type="text" placeholder="Expiration date" value={expdate}  onChange={handleChange} required/>
          <input name='cvv' type="password" placeholder="CVV" value={cvv} onChange={handleChange} required/>
        <input name='firstname' type="text" placeholder="First name" value={firstname} onChange={handleChange} required/>
          <input name='lastname' type="text" placeholder="Last name" value={lastname} onChange={handleChange} required/>

          <p className="terms">
            By clicking the “Save” button below, you agree that Netflix will automatically continue your membership and charge the membership fee (currently €12,99/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.
          </p>

          <button className="save-button">Save</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
