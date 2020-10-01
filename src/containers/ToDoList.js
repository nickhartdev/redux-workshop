import React from 'react';
import { connect } from 'react-redux';
import ToDo from './ToDo/ToDo';
import VisibilityButtons from '../containers/VisibilityButtons';

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
      <VisibilityButtons />
      {toDoList.length > 0 && <ul>{toDoList}</ul>}
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(ToDoList);