import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import Cartcontext from '../../../store/cart-context';

const MealItem = props =>{
    const cartCtx = useContext(Cartcontext);
    const price = `$${props.price}`;
    const onAddtoCartHandler = amount =>{
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount:amount,
            price: props.price
        });
    };

    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}> {props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id = {props.id} onAddtoCart ={onAddtoCartHandler}/>
            </div>
        </li>
        
    );

}
export default MealItem; 