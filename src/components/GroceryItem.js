import React from 'react';

const GroceryItem = ({ item, onRemoveItem, onToggleStock }) => {
  return (
    <li className={`grocery-item ${!item.inStock ? 'out-of-stock-item' : ''}`}>
      <div className="item-info">
        <span className="item-name">{item.name}</span>
        <span className={`item-status ${item.inStock ? 'in-stock' : 'out-of-stock'}`}>
          {item.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
      <div className="item-actions">
        <button
          onClick={() => onToggleStock(item.id)}
          className="toggle-stock-button"
        >
          Toggle Stock
        </button>
        <button
          onClick={() => onRemoveItem(item.id)}
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default GroceryItem;