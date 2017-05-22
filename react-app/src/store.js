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


//simple reducer function that just returns the current state
function todos(state = defaultState) {
  return state;
}


//reducer that modifies that list
function modifyList(state = defaultState, action) {
  switch(action.type) {
    case 'ADD_TODO':
    return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
          }
        ]
      })

  default:
    return state;
}
}



const rootReducer = combineReducers({todos, modifyList})

//create store, tie in single reducer function
//createStore accepts two arguments, the reducer, and an optional preloadedState value
const store = createStore(rootReducer, defaultState);

export default store;
