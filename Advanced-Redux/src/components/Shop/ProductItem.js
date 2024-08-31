import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions, quanityActions } from '../Store';


const ProductItem = (props) => {
  const { id, title, price, description,} = props.item;
  const dispatch = useDispatch();

  const quantityHandler=()=>{
    dispatch(quanityActions.addToCart());
    dispatch(cartActions.itemsInCart(props.item));
    //console.log(props.item)
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={quantityHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
