import React from 'react';
import { connect } from 'react-redux';
import { ToDo } from '../components/ToDo/ToDo';

const ToDoList = ({ todos }) => {
  const toDoList = todos.map(todo => {
    console.log(todo);
    return (
      <ToDo 
        { ...todo } 
        key={ todo.id }
      />
    )
  })

  return (
    <ul>
      { toDoList }
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(ToDoList);