import React from 'react';
import ProductCard from './ProductCard';
import useFetchProducts from '../hooks/useFetchProducts';
import './ProductGrid.css';

const ProductGrid = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;