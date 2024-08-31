import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const isEmpty = (name)=>name.trim()==="";
const isNotSixChars =value =>value.trim().length!==6;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const [formInputValidity, setFormInputValidity]  = useState({
    name: true,
    street: true,
    postal: true,
    city:true,
  }); 

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName= nameInputRef.current.value;    
    const enteredStreet= streetInputRef.current.value;
    const enteredPostal= postalInputRef.current.value;
    const enteredCity= cityInputRef.current.value;
  
    const enteredNameIsVallid = !isEmpty(enteredName);
    const enteredStreetIsVallid = !isEmpty(enteredStreet);
    const enteredCityIsVallid = !isEmpty(enteredCity);
    const enteredPostalIsValid = !isNotSixChars(enteredPostal);
  
    setFormInputValidity({
      name: enteredNameIsVallid,
      street: enteredStreetIsVallid,
      postal: enteredPostalIsValid,
      city: enteredCityIsVallid,
    })
    const formIsValid =enteredNameIsVallid && enteredCityIsVallid && enteredPostalIsValid && enteredStreetIsVallid;
  
    if (!formIsValid){
        return
    }
    props.onConfirm({
        name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    })
    setFormInputValidity({
        name: "",
        street: "",
        postal: "",
        city: "",
      })
  };
  const namecontrolClasses = `${classes.control} ${
    formInputValidity.name? '':classes.invalid}`;
  const streetcontrolClasses = `${classes.control} ${
        formInputValidity.street? '':classes.invalid}`;
  const citycontrolClasses = `${classes.control} ${
    formInputValidity.city? '':classes.invalid}`; 
  const postalcontrolClasses = `${classes.control} ${
        formInputValidity.postal? '':classes.invalid}`;

  return (
    <form className={namecontrolClasses} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formInputValidity.name&&<p>Please enter valid Name</p>}
      </div>
      <div className={streetcontrolClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!formInputValidity.street&&<p>Please enter valid Street</p>}
      </div>
      <div className={postalcontrolClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef}/>
        {!formInputValidity.postal&&<p>Please enter valid Postal Code</p>}
      </div>
      <div className={citycontrolClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref = {cityInputRef}/>
        {!formInputValidity.city&&<p>Please enter valid City</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;