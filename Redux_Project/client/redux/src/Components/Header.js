import {Fragment} from 'react';
import './Header.css';
import { useSelector} from 'react-redux';


const Header = ()=>{

    const auth = useSelector(state => state.auth.isAuthenticated);

    return(
        <Fragment>
               <header className='header'>
                 <h1>Redux Auth</h1>
                 <nav>
        <ul>
          <li>
            {auth &&<a href='/'>My Products</a>}
          </li>
          <li>
            {auth &&<a href='/'>My Sales</a>}
          </li>
          <li>
            { auth ?<button>Logout</button>
             :<button>Login</button>}
          </li>
        </ul>
      </nav>
               </header>
        </Fragment>

    );
};

export default Header;