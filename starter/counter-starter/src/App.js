import { useState } from 'react';

import './App.css';

import ShoppingIcon from './assets/shopping-icon.svg';

function App() {
  const [value, setValue] = useState('')

  console.log(value)

  return (
    <>
      <nav className="nav">
        <img className="nav-icon" src={ShoppingIcon} alt="shopping icon" />
        <h1 className="nav-title">ShoppingList</h1>
      </nav>

      <section className="container">
        <form className="form">
          <input className="input" type="text" placeholder="List" onChange={(e) => {setValue(e.target.value)}} value={value}/>
          <button className="add-button" type="submit">add</button>
        </form>
      </section>
    </>
  );
}

export default App;
