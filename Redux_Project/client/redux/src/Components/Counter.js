import './Counter.css';
import {useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../Store'; //redux toolkit
//import { Component } from 'react'; for class component

/*const Counter =()=>{
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const showCounter = useSelector(state => state.counter.showCounter);

    const incrementHandler=()=>{
          dispatch({type: 'increment'});
    };
    const decrementHandler=()=>{
        dispatch({type: 'decrement'});        
    };

    const increaseHandler =()=>{
        dispatch({type: 'increase', amount: 10});
    }
    const onToggleHnadler =()=>{
        dispatch({type: 'toggle',})
    };*/

    const Counter =()=>{
        const dispatch = useDispatch();
        const counter = useSelector(state => state.counter.counter);
        const showCounter = useSelector(state => state.counter.showCounter);
        const auth = useSelector(state => state.auth.isAuthenticated);
    
        const incrementHandler=()=>{
              dispatch(counterActions.increment());
        };
        const decrementHandler=()=>{
            dispatch(counterActions.decrement());        
        };
    
        const increaseHandler =()=>{
            dispatch(counterActions.increase(10));
        }
        const onToggleHnadler =()=>{
            dispatch(counterActions.toggeleCounter())
        };

    return (
        <div className = 'counter'> 
            <h1>REDUX COUNTER</h1>
            {showCounter && auth && 
            <><div className="counter-value">{counter}</div><div>
                    <button onClick={incrementHandler}>Increment</button>
                    <button onClick={increaseHandler}>Increaseby10</button>
                    <button onClick={decrementHandler}>Decrement</button>
                </div></>
            }
            <button className="counter-button" onClick={onToggleHnadler}>Toggle Counter</button>
        
        </div>
    )
};
/*//Class bases comp

class Counter extends Component{
      
   incrementHandler(){
    this.props.increment();
   }
   decrementHandler() {
    this.props.decrement();
   }
   onToggleHnadler () {}

    render(){

        return(
        <div className = 'counter'>
            <h1>REDUX COUNTER</h1>
            <div className="counter-value">{this.props.counter}</div>
            <div>
               <button onClick={this.incrementHandler.bind(this)}>Increment</button>
                <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
            </div>
            <button className="counter-button" onClick={this.onToggleHnadler}>Toggle Counter</button>
        </div>
        );
    }
}

//connect is used in class component  to use redux inside, becasue in classs comps hooks can't used
const mapStateProps = state =>{
 return{
   counter: state.counter.counter
};
}

const mapDispatchToProps = dispatch=>{
    return{
          increment: ()=>dispatch({type:'increment'}),
          decrement: ()=>dispatch({type:'decrement'}),
    };
}

export default connect()(Counter);*/

export default Counter;