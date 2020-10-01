import React from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo/ToDo';

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
      {toDoList.length > 0 && 
        <ul>{ toDoList }</ul>
      }
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(ToDoList);