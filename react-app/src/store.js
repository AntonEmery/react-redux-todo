import { createStore } from 'redux';



const state = 0;

//reducer function.
function counter(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}


//create store, tie in single reducer function
const store = createStore(counter, state);

export default store;
