export const addToDo = toDo => {
  return {
    type: 'ADD_TODO',
    toDo
  }
}

export const markToDoAsComplete = id => {
  return {
    type: 'COMPLETE_TODO',
    id
  }
}

export const changeFilter = filter => {
  return {
    type: 'CHANGE_FILTER',
    filter
  }
}