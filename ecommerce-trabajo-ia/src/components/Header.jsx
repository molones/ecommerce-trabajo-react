import React from 'react';
import SearchBar from './SearchBar';
import { useCart } from '../contexts/CartContext';
import './Header.css'; // Assuming you will create a Header.css for styling

const Header = () => {
  const { cartItems } = useCart();

  return (
    <header className="header">
      <div className="logo">eCommerce Store</div>
      <SearchBar onSearch={(query) => console.log('Searching for:', query)} />
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="cart-icon">
        <span>Cart ({cartItems.length})</span>
      </div>
    </header>
  );
};

export default Header;