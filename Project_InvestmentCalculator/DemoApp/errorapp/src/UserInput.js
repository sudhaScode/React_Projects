import React,{useState} from 'react';
import styles from './UserInput.module.css';
import Card from './UI/Card';
import Button from './UI/Button';
import ErrorModal from './UI/ErrorModal';
const UserInput = (props)=>{
    const [userName, setUsername] = useState();
    const [userAge, setUserage] = useState(); 
    const [error, setError] = useState();  
    const inputHandler = (key, value)=>{
         /*setUser((user)=>{
            return{
                ...user,
               [key]:value,
               id: Math.random()*100+5,
            }
         });*/
         if(key === 'name'){
           setUsername(value);
         }
         else{
           setUserage(value);
         }
       }

    const submitHandler =(event)=>{
        event.preventDefault();

        if(userName.length === 0 || userAge.length === 0){
            setError({
                title:"Invalid input",
                message:"Please enter a valid name and age (non-empty values).",
            });
            setUsername(null);
            setUserage(null);
        }
        else if(+userAge<1){
            setError({
                title:"Invalid age",
                message: "  please enter a valid age > 0",
            });
            setUsername(null);
            setUserage(null);
        }
        else{
        const userData ={
            name:userName,
            age: userAge,
        }
        props.onAdd(userData);
        setUsername('');
        setUserage('');
    }
    }
    const errorHandler =()=>{
       setError(null);
    }
    return(
        <div>
{error && <ErrorModal title ={error.title} message ={error.message} comfirm ={errorHandler}/>}
    <Card className= {styles.input}>
        <form onSubmit={submitHandler}>
              <label htmlFor='Name'>Name</label>
              <input type='text'id ="name" onChange={(event)=>{inputHandler('name',event.target.value)}}/>
              <label htmlFor='Age' >Age (years)</label>
              <input id ='age' type='number' onChange={(event)=>{inputHandler('age', event.target.value)}}/>
              <Button type='submit' className={styles.button}>Add</Button>
        </form>
    </Card>
    </div>
    );

}
export default UserInput;

