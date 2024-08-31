import React, {useState} from "react";

const intilatData ={
    currentSavings: 10000,
    yearlySavings: 1000,
    expectedIntrest: 5,
    investmentDuration: 10,
} 

function FinanceForm (props){
 /* const [currentSavings, setCurrentSavings] = useState(0);
  const [yearlySavings, setYearlySavings]= useState(0);
  const [expectedIntrest, setExpectedIntrest] = useState(0);
  const [investmentDuration, setInvestmentDuration] =  useState(0);

  const inputHandler = (identifier, data)=>{
    if(identifier === 'current-savings'){
      setCurrentSavings(data);
    }
    else if (identifier === 'yearly-savings'){
      setYearlySavings(data);
    }
    else if(identifier ==='expected-intrest'){
      setExpectedIntrest(data);
    }
    else{
      setInvestmentDuration(data);
    }
  }
const onSubmitHandler = (event)=>{
    event.preventDefault();
    const finacneObject ={
        id: ((Math.random()*100 )+1).toString(),
        currentSavings: +currentSavings,
        yearlySavings: +yearlySavings,
        expectedIntrest: +expectedIntrest,
        investmentDuration: +investmentDuration,
    }
    props.onCalculater(finacneObject);
}
const resetHandler =()=>{
    setCurrentSavings(0);
    setExpectedIntrest(0);
    setInvestmentDuration(0);
    setYearlySavings(0);
}*/
const [userInput,setUserinput] = useState(intilatData);
const inputHandler = (input, value)=>{
    setUserinput((userInput)=>{
        return {
            ...userInput,
            [input]:+value,
        }
    });
}
//onClearHandler
const  clearHandler =()=>{
    props.onClearHandler(false);
}
const onSubmitHandler = (event)=>{
    event.preventDefault();
    props.onCalculater(userInput);
}
const resetHandler =()=>{
     setUserinput(intilatData);
}
  return (
    <div>
        <form className="form" onSubmit={onSubmitHandler}>
          <div className="input-group">
            <p>
               <label htmlFor = "current-savings">CURRENT SAVINGS($)</label>
               <input type="number" id = "currentSavings"  min = "1" onChange = {(event)=>{inputHandler(event.target.id, event.target.value)} } ></input>
            </p>
            <p>
              <label htmlFor = "yearly-savings">YEARLY SAVINGS($)</label>
              <input  type="number" id = "yearlySavings"  min = "1" onChange = {(event)=>{inputHandler(event.target.id, event.target.value)}}></input>
            </p>
          </div>
          <div className="input-group">
            <p>
              <label htmlFor = "epected-interest">EXPECTED INTEREST(%, PER YEAR)</label>
              <input  type="number" id = "expectedIntrest"  min = "1" onChange = {(event)=>{inputHandler(event.target.id, event.target.value)}}></input>
            </p>
            <p>
              <label htmlFor = "investment-duration">INVESTMENT DURATION(IN YEARS)</label>
              <input type="number" id = "investmentDuration"  min = "1" onChange = {(event)=>{inputHandler(event.target.id, event.target.value)}}></input>
            </p> 
          </div>
          <p className="actions">
            <button onClick ={resetHandler}type="reset" className="buttonAlt">Reset</button>
            <button type="submit" className="button" >Calculate</button>
            <button onClick = {clearHandler} type="cancel" className="buttonAlt">Clear</button>
          </p>
        </form>
        </div>
    );
}
export default FinanceForm;