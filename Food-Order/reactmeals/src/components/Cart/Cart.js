import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import React, { useContext, useState } from 'react';
import CartItem from './CartItem';
import Cartcontext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart =props=>{
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmitted, setDidSubmitted] =useState(false);
    const crtCtx = useContext(Cartcontext);
    const totalAmount =`$${crtCtx.totalAmount.toFixed(2)}`;
    const hasItems = crtCtx.items.length>0;
    const cartItemRemoveHandler = id=>{
        crtCtx.removeItem(id);
    };
    const cartItemAddHandler = item =>{    
        crtCtx.addItem({...item,amount:1});
    };

    const checkoutHandler=()=>{
        setIsCheckout(true);
    }

    const onCancelHandler=()=>{
        setIsCheckout(false);
    }
    const submitOrederHandler = async (userdata)=>{
           setIsSubmitting(true);
        await fetch('https://react-sever-default-rtdb.firebaseio.com/orders.json',{
            method:'POST',
            body: JSON.stringify({
                user: userdata,
                orderItems: crtCtx.items,   
            })
        });
        setIsSubmitting(false);
        setDidSubmitted(true);

    };
    const cartItems = (<ul className={classes['cart-items']}>
                    {crtCtx.items.map(item =>(
                    <CartItem 
                    key ={item.id} 
                    name ={item.name} 
                    amount={item.amount} 
                    price={item.price} 
                    onRemove ={cartItemRemoveHandler.bind(null, item.id)} 
                    onAdd ={cartItemAddHandler.bind(null,item)}/>))}
                   </ul>);
    const cartModalcontents = (<React.Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout? <Checkout onCancelHandler ={onCancelHandler} onConfirm ={submitOrederHandler}/>:
                <div className={classes.actions}>
                 <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
                 {hasItems && <button className={classes.button} onClick={checkoutHandler}>Order</button>}
                </div>
            } 
            </React.Fragment>);
     const isSubmittingModalContent =<p>Sending yout Data.....</p>
     const didSubmittedModalContent =<p>your order was sent!</p>
    return(
        <Modal onClose={props.onClose} > 
         {!isSubmitting&&!didSubmitted&& cartModalcontents}
         {isSubmitting && isSubmittingModalContent}
         {!isSubmitting&&didSubmitted && didSubmittedModalContent}
        </Modal>
    );
}

export default Cart;