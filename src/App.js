import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import GroceryList from './components/GroceryList';
import Controls from './components/Controls';
import './App.css';

const initialGroceries = [
  { id: 1, name: 'Avocados', inStock: true },
  { id: 2, name: 'Organic Bananas', inStock: true },
  { id: 3, name: 'Sourdough Bread', inStock: false },
  { id: 4, name: 'Almond Milk', inStock: true },
  { id: 5, name: 'Cherry Tomatoes', inStock: false },
];

function App() {
  const [groceries, setGroceries] = useState(initialGroceries);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGroceries, setFilteredGroceries] = useState(groceries);

  useEffect(() => {
    const results = groceries.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGroceries(results);
  }, [searchTerm, groceries]);

  const handleAddItem = (itemName) => {
    if (itemName.trim() === '') return;
    const newItem = {
      id: Date.now(),
      name: itemName,
      inStock: true,
    };
    setGroceries([...groceries, newItem]);
  };

  const handleRemoveItem = (id) => {
    setGroceries(groceries.filter(item => item.id !== id));
  };

  const handleToggleStock = (id) => {
    setGroceries(
      groceries.map(item =>
        item.id === id ? { ...item, inStock: !item.inStock } : item
      )
    );
  };

  return (
    <div className="app-container">
      <Header />
      <Controls
        onAddItem={handleAddItem}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <GroceryList
        items={filteredGroceries}
        onRemoveItem={handleRemoveItem}
        onToggleStock={handleToggleStock}
      />
    </div>
  );
}

export default App;