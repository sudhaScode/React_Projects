import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../Store';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.showCart.items);
  let count= Object.keys(cartQuantity).length;
  const showCartHandler =()=>{
    dispatch(cartActions.setShowCart());
 }
  return (
    <button  onClick ={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{count}</span>
    </button>
  );
};

export default CartButton;
