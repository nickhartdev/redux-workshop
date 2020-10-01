export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), todo: action.toDo, completed: false }];
    case 'COMPLETE_TODO':
      const toDoMatch = state.find(todo => todo.id === action.id);
      toDoMatch.completed = !toDoMatch.completed;
      return [...state];
    default:
      return state;
  }
}