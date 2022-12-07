import { useState } from 'react';

import './App.css';

import ShoppingIcon from './assets/shopping-icon.svg';

function App() {
  return (
    <>
      <nav className="nav">
        <img className="nav-icon" src={ShoppingIcon} alt="shopping icon" />
        <h1 className="nav-title">ShoppingList</h1>
      </nav>
    </>
  );
}

export default App;
