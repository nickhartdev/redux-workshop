export const addToDo = toDo => {
  return {
    type: 'ADD_TODO',
    toDo
  }
}

export const markToDoAsComplete = id => {
  console.log('firing action creator')
  return {
    type: 'COMPLETE_TODO',
    id
  }
}