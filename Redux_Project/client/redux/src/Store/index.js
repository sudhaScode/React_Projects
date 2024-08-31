import authSlice from './Atuh';
import counterSlice from './Counter';
import { configureStore } from '@reduxjs/toolkit';


/*const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }
  if (action.type === 'increase'){
    return{
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }

  if (action.type === 'toggle'){
    return{
      showCounter: !(state.showCounter),
      counter: state.counter
    }
  }
  return state;
};

const rootReducer = {
  counter: counterReducer,
  // You can add more reducers here if needed
};

const store = configureStore({
  reducer: rootReducer,
  // Other store configuration options if needed
});*/

const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth:authSlice.reducer},
  // Other store configuration options if needed
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
