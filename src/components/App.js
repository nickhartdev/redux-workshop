import React, { Component } from 'react';
import AddTodoForm from '../containers/AddTodoForm';
import ToDoList from '../containers/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <section className="buttons-container">
          <button>Show All</button>
          <button>Show Active</button>
          <button>Show Show Completed</button>
        </section>
        <AddTodoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;
