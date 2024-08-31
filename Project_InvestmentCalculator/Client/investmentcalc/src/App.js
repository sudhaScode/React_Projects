import logo from "./assets/logo.png";
import React,{useState} from 'react';
import './App.css';
import FinanceForm from "./FinanceForm";
import FinanceTable from "./FinanceTable";

function App() {
  const [finance, setFinance] = useState(null);
  const [useDecision, setUserdecision] =useState(true);
  const financeCalculator = (userInput)=>{
      setFinance(userInput)
  }
  const yearlyData = []; // per-year results
  if (finance != null){
    let currentSavings = finance["currentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution  = finance["yearlySavings"]; // as mentioned: feel free to change the shape...
    const expectedReturn = finance["expectedIntrest"];
    const duration = finance["investmentDuration"];
    let investmentCapital = currentSavings;
    let totalIntrest =0;  
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      investmentCapital +=yearlyContribution;//clear
      const yearlyInterest = (currentSavings  * expectedReturn)/100; 
      totalIntrest += yearlyInterest;
      currentSavings = investmentCapital + totalIntrest;   
      yearlyData.push({ 
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalIntrest: totalIntrest,
        investmentCapital: investmentCapital,
      }); 
    }
  }
  const clearHandler =(decision)=>{
    setUserdecision(decision);      
  };
  return(
    <div className="App">
      <header className= "header">
        <img src = {logo} alt = "logo" className = "header-img"/>
        <h1>Investment Calculator</h1>
      </header>
       <FinanceForm onCalculater={financeCalculator} onClearHandler = {clearHandler}/>
       {finance && useDecision ?<FinanceTable data={yearlyData}/>: <p>Set the financial goals</p>}
    </div>
  );
}
export default App;
