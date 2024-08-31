import { configureStore } from "@reduxjs/toolkit";
import quantitySlice from "./quantitySlice";
import mainCartSlice from "./mainCartSlice";


const  store = configureStore({
    reducer: {cartQuantity: quantitySlice.reducer, showCart: mainCartSlice.reducer,
    //can add more reducers
},
});

export const quanityActions = quantitySlice.actions;
export const cartActions = mainCartSlice.actions;
export default store;
