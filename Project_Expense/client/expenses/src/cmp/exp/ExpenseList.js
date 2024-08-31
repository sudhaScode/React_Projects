import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props)=>{
    if (props.filteredExpenses.length === 0){
        return (
            <h2 className='expense-list__fallback'> Found no expense</h2>
        );
    }
    return (
        <ul className='expense-list'>
            {props.filteredExpenses.map(exp => 
            <ExpenseItem key = {exp.id} date = {exp.date} title = {exp.title} amount = {exp.amount} ></ExpenseItem>)}
        </ul>
    );
};
export default ExpenseList;