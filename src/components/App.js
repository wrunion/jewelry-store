import React from 'react';
import './App.css';
import ItemDetail from './ItemDetail';
import ItemList from './ItemList';

const App = () => {
  return (
    <div className="App">
      <h1>Tea Shop</h1>
      <ItemList />
      <ItemDetail />
    </div>
  );
}

export default App;