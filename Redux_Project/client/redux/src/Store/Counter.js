import { createSlice } from '@reduxjs/toolkit';

const initialStateCounter = { counter: 0, showCounter: true}; // Initial state for your reducer
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialStateCounter,
    reducers: {
      increment(state){
        state.counter++;
      },
      decrement(state){
        state.counter--;
      },
      increase(state, action){
        state.counter = state.counter + action.payload;
      },
      toggeleCounter(state){
        state.showCounter = !state.showCounter;
      }
    }
  });

  export default counterSlice;