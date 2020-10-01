export const filter = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      state.filter = action.filter;
      return state.filter;
    default:
      return state;
  }
}