import classes from './Addition.module.css'
import Card from '../UI/Card';
import { useEffect, useState, useRef } from 'react';


function randomNumGenerator(range1, range2) {
    return Math.floor(Math.random() * (range2 - range1 + 1)) + range1;
}

function Substraction() {
    //level
    const[level, setLevel] = useState("easy");
   // const [range,setRange] = useState([2,100]);
    //As useState being asynchronous in nature, can't use the updated level 

    //const levelRef = useRef(level);// as no need to use level value imediately
    const rangeRef = useRef([20, 100]);

    const[numberOne, setNumberOne]=useState(randomNumGenerator(rangeRef[0],rangeRef[1]));
    const[numberTwo, setNumberTwo]=useState(randomNumGenerator(rangeRef[0],rangeRef[1]));

    const [result, setResult] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isEqual, setIsEqual] = useState(false);


    useEffect(()=>{
        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                validation(event.target.value);
            }
        }

        function comparator(value, val1, val2) {
            if (value === (val1 - val2)) {
                setIsEqual(true);
            }
        }
    
        const inputHandler = (value) => {
            setResult(value);
            comparator(value, numberOne, numberTwo);
        }
    
        const validation = (num) => {
            if (num / 2 > 0 && num.length != null) {
                setIsValid(true);
                inputHandler(num);
            }
        }
        window.addEventListener('keydown', handleKeyDown);

       return () => {
            window.removeEventListener('keydown', handleKeyDown);
          };


    },[numberOne,numberTwo]);

    const continueHandler = () => {
        setIsEqual(false);
        setNumberOne(randomNumGenerator(rangeRef.current[0],rangeRef.current[1]));
        setNumberTwo(randomNumGenerator(rangeRef.current[0],rangeRef.current[1]));
        setResult('');
    }
    // when easy level clicked it must hightlight
    const levelHandler = (lev) => {
        //levelRef.current = lev;
        if (lev === "difficult") {
          rangeRef.current = [250, 500];
        } else if (lev === "medium") {
          rangeRef.current = [100, 250];
        } else {
          rangeRef.current = [20, 100];
        }
        setLevel(lev);
      };
      
      useEffect(() => {
        setNumberOne(randomNumGenerator(rangeRef.current[0], rangeRef.current[1]));
        setNumberTwo(randomNumGenerator(rangeRef.current[0], rangeRef.current[1]));
      }, [level]);
    
        
    return (
        <div className={classes.container}>
            <Card className={classes.part}>
                <ul className={classes.level}>
                    <li><button className={level==="easy"?classes.clicked:classes.click} onClick={()=>levelHandler("easy")}>Easy</button></li>
                    <li><button className={level==="medium"?classes.clicked:classes.click} onClick={()=>levelHandler("medium")}>Medium</button></li>
                    <li><button className={level==="difficult"?classes.clicked:classes.click} onClick={()=>levelHandler("difficult")}>Hard</button></li>
                </ul>
                <div className={classes.divider}></div>
                <ul className={classes.numberlist}>
                    <li className={classes.number}>
                        <label className={classes.input}>{numberOne>numberTwo?numberOne:numberTwo}</label>
                    </li>
                    <li className={classes.number}>
                        <label className={classes.operator}> {"-"}</label>
                    </li>
                    <li className={classes.number}>
                        <label className={classes.input}>{numberTwo<numberOne?numberTwo:numberOne}</label>
                    </li>
                </ul>

                <input placeholder={'Enter answer'} className={classes.enter}/>
                {isEqual && isValid && <h2 className={classes.result}>{`Cheers ${result} is currect`} </h2>}
                {!isEqual && result && <h2 className={classes.wrong}>{`Ohh! ${result} is not currect`}</h2>}
            </Card>{isEqual &&
                <div className={classes.submit}>
                    <button onClick={continueHandler} className={classes.continue}>Continue</button>
                </div>}

        </div>
    );
}


export default Substraction;