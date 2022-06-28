import React from 'react'
import '../styles/App.css';
const App = () => {

  return (
    <div id="main">
      <input id="todo-input"/>
      <button id="add-todo" >Add todo</button>
      <h4>Todos</h4>
      <ul id="items">
      </ul>
    </div>
  )
}


export default App;
