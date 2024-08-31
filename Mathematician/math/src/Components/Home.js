import React, { useState } from 'react';
//  import Card from '../UI/Card';
import Addition from './Addition';
import classes from './Home.module.css';
import Multiplication from './Multiplication';
import Substraction from './Substraction';

function Home(){
    const [addition, setAddition] = useState(false);
    const [substraction, setsubstraction] = useState(false);
    const [multiplication, setmultiplication] = useState(false);

    const additionHandler = ()=>{
        setAddition(true);
        setsubstraction(false)
        setmultiplication(false)

    }
    const substractionHandler=()=>{
        setsubstraction(true)
        setAddition(false);
        setmultiplication(false)

    }
    const multiplicationHandler=()=>{
        setmultiplication(true)
        setsubstraction(false)
        setAddition(false);
    }

    return(
    <div className = {classes.home}>
        <ul>
            <ul className={classes.actions}>
            <li className={classes.type}><button onClick={additionHandler} className={addition?classes.clicked:classes.click}>Addition</button></li>
            <li className={classes.type}><button onClick={substractionHandler} className={substraction?classes.clicked:classes.click}>Substraction</button></li>
            <li className={classes.type}><button onClick={multiplicationHandler} className={multiplication?classes.clicked:classes.click}>Multiplication</button></li>
        </ul>
        <div>
               {addition && <Addition />}
               {substraction && <Substraction />}
               {multiplication && <Multiplication />}  
        </div>
        </ul>

    </div>
    );

}
export default Home;