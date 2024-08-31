import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import {  cartActions } from '../Store';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  //console.log(id);
   const dispatch = useDispatch();
  const decreaseHandler = ()=>{
      dispatch(cartActions.decreaseQuantity(id));
 };
  const increaseHandler =(event)=>{
      dispatch(cartActions.increaseQuantity(id)); 
};


  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseHandler} value={id}>-</button>
          <button onClick={increaseHandler} value={id}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
