import {  useDispatch } from 'react-redux';
import { authActions } from '../Store';
const Actions =()=>{

    const dispatch=useDispatch();
    
    const signinHandler = ()=>{
        dispatch(authActions.login());        
    };

    const signoutHandler =()=>{
        dispatch(authActions.logout());
    }

    return(
     <div>
        <div className='login'>
           <button onClick={signinHandler}>Signin</button>
        </div>
        <div className='logout'>
          <button onClick={signoutHandler}>Signout</button>
        </div>
     </div>
    );
};

export default Actions;