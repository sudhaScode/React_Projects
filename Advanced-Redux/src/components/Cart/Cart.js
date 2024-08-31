import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  

  const quantity = useSelector(state => state.cartQuantity.quantity);
  const showCart = useSelector(state=>state.showCart.cart);
  const cartItems = useSelector(state=> state.showCart.items);
  //console.log(cartItems);
  

  return (  
    <Card className={classes.cart}>
      {quantity?<h2>Your Shopping Cart</h2>:<h2>Your Cart Empty</h2>}
      <ul>
        {showCart && quantity>0 &&
        cartItems.map( item=>
        <CartItem key ={item.key} 
          item={{  id: item.id, title: item.title, quantity: item.quantity, total: item.quantity*item.price, price: item.price }}
        />)
}
      </ul>
    </Card>
  );
};

export default Cart;
