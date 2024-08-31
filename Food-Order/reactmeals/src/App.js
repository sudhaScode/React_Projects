import React, {useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart'; 
import CartProvider from './store/CartProvider';

function App() {
  const [cartShow, setCartShow] = useState(false);

  const showCartHandller =()=>{
    setCartShow(true);
  }
  const hideCartHandler=()=>{
    setCartShow(false);
  }
  return (
      <CartProvider>
          {cartShow && <Cart onClose={hideCartHandler}/>}
          <Header onShowCart ={showCartHandller}/>
          <main>
            <Meals/>
          </main>
      </CartProvider>
  );
}

export default App;
