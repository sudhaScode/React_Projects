import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css';
import Cartcontext from "../../store/cart-context";

const HeaderCartButton = props =>{
    const [buttonH, setButttonH]=useState(false);
    const cartCtx = useContext(Cartcontext);
    const numberofCartItems = cartCtx.items.reduce((current,item)=>{
        return current+item.amount},0);
    const btnclass = `${styles.button} ${buttonH?styles.bump:''}`;

    useEffect(()=>{
        if(cartCtx.items.length ===0){
            return;
        }
        setButttonH(true);
        const timer= setTimeout(()=>{
            setButttonH(false);
        }, 300);

        return  ()=>{
            clearTimeout(timer);
        }
    },[cartCtx.items]);
    return(
        <button className={btnclass} onClick ={props.onClick}>      
            <span className={styles.icon}>
                <CartIcon/></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberofCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;