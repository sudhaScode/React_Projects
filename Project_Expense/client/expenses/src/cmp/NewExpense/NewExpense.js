import React, {useState} from "react";
import ExpenseForm from "./ExpensesForm";
import './NewExpense.css';

const NewExpense= (props)=>{
    const [contentDriver, setcontentDriver] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const enteredData = {
             ...enteredExpenseData
        };
        props.onAddExpense(enteredData);
        };
        const startEditingHandler = ()=>{
            setcontentDriver(true);
        };
        const stopEditingHandler = ()=>{
            setcontentDriver(false);
        };
        return <div className="new-expense">
            {!contentDriver && (<button onClick={startEditingHandler}>Add Expense</button>)}
            {contentDriver && (<ExpenseForm onStop={stopEditingHandler} onSaveEnteredDate = {saveExpenseDataHandler}/>)}
       </div>
}
export default NewExpense;
