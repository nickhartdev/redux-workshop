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

const filterVisibleToDos = (toDos, filter) => {
  switch (filter) {
    case 'all':
      return toDos;
    case 'active':
      return toDos.filter(toDo => !toDo.completed);
    case 'completed':
      return toDos.filter(toDo => toDo.completed);
    default:
      return toDos;
  }
}

const mapStateToProps = state => ({
  todos: filterVisibleToDos(state.todos, state.filter)
})

export default connect(mapStateToProps)(ToDoList);