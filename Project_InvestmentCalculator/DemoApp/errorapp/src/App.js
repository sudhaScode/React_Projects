import './App.css';
import UserInput from './UserInput';
import UserList from './UserList';
import React,{useState} from 'react';
const userList =[];
function App() {
  const [state, setState] = useState(userList);
  
  const onAddHanlder = (user)=>{
    setState((prevState)=>{
      return[
         ...prevState,
         user,
      ]
    });
       /*Object.keys(user).forEach((key) => {
        userList.push({
        name: key,
        about: user[key]
      })
    
   });*/
  }
  console.log(state);

  return (
    <div>
      <UserInput onAdd = {onAddHanlder}/>
      <UserList list={state}/>
    </div>
  );
}

export default App;
