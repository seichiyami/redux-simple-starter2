// state argument is not application state, only the state
// this reducer is responsible for
// state = null is es6, if state comes in undefined set to null
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
