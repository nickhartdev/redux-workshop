export const filter = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      state = action.filter;
      return state;
    default:
      return state;
  }
}