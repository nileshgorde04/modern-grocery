import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryList = ({ items, onRemoveItem, onToggleStock }) => {
  if (items.length === 0) {
    return <p className="empty-list-message">No items found. Try a different search or add a new item!</p>;
  }

  return (
    <ul className="grocery-list">
      {items.map(item => (
        <GroceryItem
          key={item.id}
          item={item}
          onRemoveItem={onRemoveItem}
          onToggleStock={onToggleStock}
        />
      ))}
    </ul>
  );
};

export default GroceryList;