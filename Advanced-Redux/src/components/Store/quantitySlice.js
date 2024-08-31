import { createSlice } from "@reduxjs/toolkit";


const initialState = {quantity:0};
const quantitySlice =createSlice({
    name: "quantity",
    initialState,
    reducers:{
        addToCart(state){
            state.quantity++;
        },
        removeFromCart(state){
            state.quantity--;
        },
    },

});
export default quantitySlice;