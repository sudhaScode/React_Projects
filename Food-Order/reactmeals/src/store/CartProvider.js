import Cartcontext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items:[],
    totalAmount:0,  
};
const cartReducer = (state, action) =>{
    if (action.type === 'ADD'){
        
        const exitingCartItemIndex = state.items.findIndex(item=>item.id === action.item.id);
        const exitingCartItem = state.items[exitingCartItemIndex];
        
        let updatedItems;
        let updatedItem;  
        if (exitingCartItem){
            updatedItem ={
                ...exitingCartItem,
                amount: exitingCartItem.amount+ action.item.amount
            };
            updatedItems =[...state.items];
            updatedItems[exitingCartItemIndex] =updatedItem;
        }
        else{
            updatedItems= state.items.concat(action.item);

        }
        const updatedTotalAmount = state.totalAmount + action.item.price*action.item.amount;
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        };  
    }
    if(action.type === 'REMOVE'){
        const exitingCartItemIndex = state.items.findIndex(item=>item.id === action.id);
        const exitingCartItem = state.items[exitingCartItemIndex];
        const updatedTotalAmount = state.totalAmount-exitingCartItem.price;
        let updatedItems;
        let updatedItem;
        if(exitingCartItem.amount ===1){
            updatedItems=state.items.filter(item=>item.id !==action.id)
        }
        else{
            updatedItem=    {...exitingCartItem , amount:exitingCartItem.amount-1}
            updatedItems=[...state.items];
            updatedItems[exitingCartItemIndex] = updatedItem;
        }
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultCartState;
};

const CartProvider = props=>{
    const   [cartSate, dispatchCartAction] =useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler =(item) =>{
        dispatchCartAction({type:'ADD', item: item })
    };
    const removeItemFromCartHandler =(id) =>{
        dispatchCartAction({type: 'REMOVE', id: id})
    };

    const cartContext = {
        items:cartSate.items,
        totalAmount: cartSate.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return(
        <Cartcontext.Provider value={cartContext}>
            {props.children}
        </Cartcontext.Provider>
    );

}

export default CartProvider;    