import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { addToDo } from './actions';


const render = () => ReactDOM.render(
  // pass in store as props
  <App value={store.getState()}
    addToDo={(text) => store.dispatch(addToDo(text))} />,
  document.getElementById('root')
);

render();

store.subscribe(render);
