import { createSlice } from "@reduxjs/toolkit";


const initialState = {items:[], cart:false};
const mainCartSlice = createSlice({
    name: "shopcart",
    initialState,
    reducers:{
        setShowCart(state){
            state.cart = !state.cart;
        },
        itemsInCart(state, action){
            const newItem = action.payload;
            //console.log(newItem);
            const exitingItem = state.items.find(item =>item.id === newItem.id);
            if(!exitingItem){
                state.items.push(newItem);
            }
            else{
                state.items.map(item =>{
                    if (item.id === newItem.id){
                        item.quantity = item.quantity + newItem.quantity;
                        return true;
                    }
                    return true;
                }
                    );
            }
        },
        increaseQuantity(state, action){
            const id = action.payload;
            const exitingItem = state.items.find(item =>item.id === id);
            if(exitingItem){
                state.items.map(item =>{
                    if (item.id === id){
                        item.quantity = item.quantity +1;
                        return true;
                        //console.log(item.quantity);
                    }
                    return true;
                }
                    );
            };
        },
        decreaseQuantity(state, action){
            const id = action.payload;
            console.log(id);
            const exitingItem = state.items.find(item =>item.id === id);
            if(exitingItem){
                state.items.map(item =>{
                    if (item.id === id){
                    if (item.quantity===1 ){
                        state.items.pop(id);
                    }
                    else{
                    item.quantity = item.quantity -1;
                    //console.log(item.quantity);

                    }
                }
                return true;
                }
                    );
            };

        },
    }

});
export default mainCartSlice;