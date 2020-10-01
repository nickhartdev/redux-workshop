export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), todo: action.toDo, completed: false }];
    case 'COMPLETE_TODO':
      console.log('firing reducer');
      const toDoMatch = state.find(todo => todo.id === action.id);
      return [...state];
    default:
      return state;
  }
}