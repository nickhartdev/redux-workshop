import React from 'react';
import { connect } from 'react-redux';
import ToDo from './ToDo/ToDo';

const ToDoList = ({ todos }) => {
  const toDoList = todos.map(todo => {
    return (
      <ToDo 
        { ...todo } 
        key={ todo.id }
      />
    )
  })

  return (
    <div>
      <section className="buttons-container">
        <button>Show All</button>
        <button>Show Active</button>
        <button>Show Completed</button>
      </section>
      {toDoList.length > 0 && <ul>{toDoList}</ul>}
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(ToDoList);