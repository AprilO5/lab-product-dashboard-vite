import React from 'react';
import styles from '../styles/ProductCard.module.css';
import Button from '@mui/material/Button';

const ProductCard = ({ product, onRemove }) => {
  return (
    <div className={`${styles.card} ${!product.inStock ? 'outOfStockClass' : ''}`}>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <Button variant="contained" onClick={() => onRemove(product.id)}>
        Remove
      </Button>
    </div>
  );
};

export default ProductCard;