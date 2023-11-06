import React, { useState } from "react";

function Card1(props) {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
 

    const [phoneIsValid, setPhoneIsValid] = useState(true);
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [nameIsValid, setNameIsValid] = useState(true);

    const [showError, setShowError] = useState(false)

    // const [errorChanger, setErrorChanger] = useState(false)


    const phoneChangeHandler = function(e){
        setShowError(false)
        setPhone(e.target.value);
        setPhoneIsValid(e.target.value); 
    };

    const emailChangeHandler = function(e){
        setShowError(false)
        setEmail(e.target.value);
        setEmailIsValid(e.target.value); 
    };

    const nameChangeHandler = function(e){
        setShowError(false)
        setName(e.target.value);
        setNameIsValid(e.target.value); 
    };


    function errorMessageValidator(isInvalid, errorMsg) {
        if (isInvalid) {
          return (
            <h4 className="step-1-Error">{errorMsg}</h4>
          );
        }
        return '';
      }

      


    const onClick = () => {
        if (name !== "" && email !== "" && phone !== "") {
            props.handledetail(name, email, phone);
            props.onClick();
        } else  { 
            errorMessageValidator(!nameIsValid, 'Invalid Name')
            setShowError(true)
} 
    };

    if (props.place === 1) {
       return (
            <div>
                <div className="card-1" id="1">
                    <h1><b>Personal Info</b></h1>
                  <p>Please provide your name, email address, and phone number</p>
    
    
                    <label><b>Your Name</b></label>

                    {errorMessageValidator(!nameIsValid, 'Invalid Name')}

                    <input 
                    className="name-input" 
                    placeholder="e.g. Steven King" 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={nameChangeHandler}/><br></br>
    
                    <label><b>Email Address</b></label>

                    {errorMessageValidator(!emailIsValid, 'Invalid Email')}

                    <input   
                    className="email-input" 
                    placeholder="e.g. Stevenking@loren.com" 
                    type="text" 
                    id="email" 
                    value={email}
                    onChange={emailChangeHandler}/><br></br>

                    <label><b>Phone Number</b></label>
                    
                   {errorMessageValidator(!phoneIsValid, 'Invalid Phone')}

                   <input   
                   className="phone-input" 
                    placeholder="e.g. +1 4901231231321" 
                    type="number" 
                    id="phone" 
                    value={phone}
                    onChange={phoneChangeHandler}/>

                    {showError && (   <div className='Error1'><span className='Error1'>One of the fields is empty, please double check</span> </div>)}

                    <button className="submit-button" onClick={onClick}>Next Step</button>
                </div>
    
            
            </div>
        ) 
    } else {
        return ( '' )
    }
   
}

export default Card1;