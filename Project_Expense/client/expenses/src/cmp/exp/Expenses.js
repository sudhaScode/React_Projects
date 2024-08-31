import './Expenses.css';
import ExpenseList from './ExpenseList';
import Card from '../UI/Cards';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpenseChart from './ExpenseChart';
function Expenses(props){
     const [year, setYear] = useState('All');
     const filterChangeHandler = slectedYear =>{
          setYear(slectedYear);
     };
     let filteredExpenses =  props.items;
     if (year.length === 4){
     filteredExpenses = props.items.filter((expense) => {
          return (expense.date.getFullYear().toString() === year);
        });
     }
     return(
          <div>
             <Card>
               <ExpenseFilter  onChangeFilter = {filterChangeHandler}/>
               <ExpenseChart expenses ={filteredExpenses}/>       
               <ExpenseList filteredExpenses = {filteredExpenses}/>
             </Card>
          </div>
     );
}
export default Expenses;
