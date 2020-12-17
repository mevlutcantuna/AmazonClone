import React from "react";
import "../Style/Navbar.scss";

import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';



function Navbar() {
  const basketCount = useSelector(state => (state.basket.length))

  return (
    <nav className="navbar">
      <div className="navbar__image">
        <Link to='/'>
          <img
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt="#"
          />
        </Link>
      </div>  
      <div className='navbar__searchBar'>
        <input/>
        <button>
          <SearchIcon/>
        </button>
      </div>
      <div className='navbar__links'>
        <Link to='login' className='navbar__links__item'>
          <span>Hello Can</span>
          <span>Sing In</span>
        </Link>
        <Link to='/' className='navbar__links__item'>
          <span>Return</span>
          <span>& Orders</span>
        </Link>
        <Link to='/' className='navbar__links__item'>
          <span>Your</span>
          <span>Prime</span>
        </Link>
      </div>  
      
      <Link to='/checkout' className='navbar__cart'>
        <ShoppingBasketIcon className='navbar__cart__icon'/>
        <span className='navbar__cart__count'>{basketCount}</span>
      </Link>
    </nav>
  );
}

export default Navbar;
