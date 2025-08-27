import React, { useState } from 'react';

const Controls = ({ onAddItem, searchTerm, onSearchChange }) => {
  const [newItemName, setNewItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(newItemName);
    setNewItemName('');
  };

  return (
    <div className="controls-container">
      <form onSubmit={handleSubmit} className="add-item-form">
        <input
          type="text"
          className="add-item-input"
          placeholder="e.g., Almond Milk"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type="submit" className="add-item-button">Add Item</button>
      </form>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for an item..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Controls;