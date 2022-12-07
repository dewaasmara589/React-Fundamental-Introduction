import { useState } from 'react';
import classnames from 'classnames';

import './App.css';

import ShoppingIcon from './assets/shopping-icon.svg';
import plusIcon from './assets/plus-icon.svg';
import minusIcon from './assets/minus-icon.svg';

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
            {todos.map((todo, index, arr) => {
              return (
                <div key={index} className={`todo ${!(arr.length === index+1) && 'todo-divider'}`}>
                  {todo.title}

                  <div className="todo-icon-wrapper">
                    <div className="todo-count">{todo.count}</div>

                    <button className="todo-action-button">
                      <img src={minusIcon} alt="minus Icon"/>
                    </button>

                    <button className="todo-action-button">
                      <img src={plusIcon} alt="plus Icon"/>
                    </button>
                  </div>

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
