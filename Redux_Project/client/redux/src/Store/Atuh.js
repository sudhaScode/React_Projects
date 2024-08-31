  import { createSlice } from '@reduxjs/toolkit';

  const initialAuthActionState = {isAuthenticated: false};
  const authSlice = createSlice({
      name: "authentication",
      initialState: initialAuthActionState,
      reducers:{
        login(state){
          state.isAuthenticated = true;
        },
      logout(state){
        state.isAuthenticated = false;
      },   
      }
    
    });


    export default authSlice;