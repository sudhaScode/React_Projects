import React from "react";
import './ExpenseFilter.css';

const ExpenseFilter = (props)=>{

const dropdownSelectHandler = (event)=>{
    const year = event.target.value;
    props.onChangeFilter(year); 
};


return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select  onChange={dropdownSelectHandler}>
          <option value = 'Life Long'>All</option>
          <option value='2020'>2020</option>  
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
        </select>
      </div>
    </div>
);
};

export default ExpenseFilter;