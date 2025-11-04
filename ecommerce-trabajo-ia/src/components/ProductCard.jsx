import React from 'react';
import { useCart } from '../contexts/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <button onClick={() => addToCart(product)} className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;