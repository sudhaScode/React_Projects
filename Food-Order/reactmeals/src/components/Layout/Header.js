import {Fragment} from 'react';
import mealsimg from '../../assets/meals.jpg';
import HeaderCartButton from './HeadrCartButton';
import styles from './Header.module.css';

const Header = props =>{
    return (
    <Fragment>
        <header className={styles.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick ={props.onShowCart}/>
        </header>
        <div className={styles['main-image']}>
            <img src={mealsimg} alt = 'Table of full of delicious food awating, order FAST!'/>
        </div>
    </Fragment>);
};  

export default Header;