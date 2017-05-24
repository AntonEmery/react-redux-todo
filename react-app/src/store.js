import { createStore } from 'redux';
import { combineReducers } from 'redux';

const defaultState = {
  todos:[
    {
      text: 'walk gilbert'
    },
    {
      text: 'cook dinner'
    },
    {
      text: 'clean bathroom'
    }
  ]
}


//reducer function should be the same name as the slice of state it represents
function todos(state = defaultState.todos, action) {
  if (action.type === 'ADD_TODO') {
    return [...state, {text: action.text}]
  }
  return state;
}

//reducer that is passed in needs to be a key on your default state
//or pass it in like combineReducers({todos: nameOfReducerFunction})
const rootReducer = combineReducers({todos})

//create store, tie in single reducer function
//createStore accepts two arguments, the reducer, and an optional preloadedState value
const store = createStore(rootReducer, defaultState);

export default store;
