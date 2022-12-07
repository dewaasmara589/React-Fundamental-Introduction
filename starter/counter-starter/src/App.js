import { useState } from 'react';

import './App.css';

import ShoppingIcon from './assets/shopping-icon.svg';

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([
    {title: 'Susu Ultra', count: 1},
    {title: 'Tahu Sumedang', count: 1},
    {title: 'Semangka', count: 1}
  ])

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

        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo) => {
              return (
                <div>
                  {todo.title}
                  {todo.count}
                </div>
              )
            })}
          </div>
        ) : (
          <div>Kosong</div>
        )}
      </section>
    </>
  );
}

export default App;
