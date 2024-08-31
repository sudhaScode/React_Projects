import React, { useState } from 'react';
import './ExpesesForm.css';

const ExpenseForm = (props) =>{
    const [enteredAmount,setenteredAmount] = useState('');
    const [enteredDate,setenteredDate] = useState(''); 
    const [enteredTitle,setenteredTitle] = useState('');
    /*const titleChangeHandler = (event)=>{
        setenteredTitle(event.target.value);
    };
    const amountChangeHandler = (event)=>{
        setenteredAmount(event.target.value);
    };
    const dateChangeHandler = (event)=>{
        setenteredDate(event.target.value);
    };*/
    const inputHandler = (identifier, value)=>{
            if(identifier === 'title'){
                setenteredTitle(value);
            }
            else if(identifier === 'date'){
                setenteredDate(value);
            }
            else{
                setenteredAmount(value);
            }
    };  
    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData ={
            id: ((Math.random()*100 )+1).toString(),
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveEnteredDate(expenseData);
        setenteredAmount('');
        setenteredDate('');
        setenteredTitle('');
    };
const date = new Date();
let day = date.getDate().toString();
let month = (date.getMonth() +1).toString();
let year = date.getFullYear().toString();
if (month.length === 1){
    month = "0" + month;
}
if (day.length === 1 ){
    day = "0" + day;
}


// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${year}-${month}-${day}`;

      return (
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label >Title</label>
                        <input type= 'text' value ={enteredTitle} onChange={(event)=>inputHandler('title',event.target.value)}></input>
                    </div> 
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type= 'number' min="0.01" step="0.01" value = {enteredAmount} onChange ={(event)=>inputHandler('amount',event.target.value)}></input>
                    </div> 
                    <div className='new-expense__control'>  
                        <label>Date</label>
                        <input type= 'date' min = "2020-08-09" max = {currentDate} value={enteredDate} onChange={(event)=>inputHandler('date',event.target.value)}></input>
                    </div>  
                    <div className='new-expense__actions'>
                    <button type='cancel' onClick={props.onStop}>Cancel</button>  
                    <button type='submit'>Add Expense</button>
                    </div>
                </div>
            </form>
      );


};

export default ExpenseForm;