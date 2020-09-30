export const addToDo = toDo => {
  return {
    type: 'ADD_TODO',
    toDo
  }
}

export const markToDoAsComplete = toDo => {
  return {
    type: 'COMPLETE_TODO',
    toDo
  }
}