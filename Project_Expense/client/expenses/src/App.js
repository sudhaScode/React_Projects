import './App.css';
import React, { useState } from 'react';
import Expenses from './cmp/exp/Expenses';
import NewExpense from './cmp/NewExpense/NewExpense';

const Dummy_expenses = [
  { 
    id: 'e1', 
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_expenses );
  const onAddExpenseHandler = enteredExp =>{
    setExpenses(prevExpenses =>{return [...prevExpenses, enteredExp]})
  }
  console.log(expenses);
  return (
    <div>
      <NewExpense onAddExpense = {onAddExpenseHandler}/>
       <div className='expenses'>
       <Expenses items = {expenses}></Expenses>
       </div>
      
    </div>

  );
}

/*function App() {
  return (
    <ExpenseItem 
      date = {expenses[0].date}
      title = {expenses[0].title}
      amount = {expenses[0].amount}
       ></ExpenseItem>

       <ExpenseItem 
      date = {expenses[1].date}
      title = {expenses[1].title}
      amount = {expenses[1].amount}
       ></ExpenseItem>
       <ExpenseItem 
      date = {expenses[2].date}
      title = {expenses[2].title}
      amount = {expenses[2].amount}
       ></ExpenseItem>
       <ExpenseItem 
      date = {expenses[3].date}
      title = {expenses[3].title}
      amount = {expenses[3].amount}
       ></ExpenseItem>
    <div>
      <ExpenseItem 
       obj = {expenses[0]}
       ></ExpenseItem>

       <ExpenseItem 
      obj = {expenses[]}
       ></ExpenseItem>
       <ExpenseItem 
      obj = {expenses[0]}
       ></ExpenseItem>
       <ExpenseItem 
      obj = {expenses[0]}
       ></ExpenseItem>
    </div>
  );
}*/

export default App;
