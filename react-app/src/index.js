import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { increment, decrement } from './actions';


const render = () => ReactDOM.render(
  // pass in store as props
  <App value={store.getState()}
    increment={() => store.dispatch(increment())}
    decrement={() => store.dispatch(decrement())}/>,
  document.getElementById('root')
);

render();

store.subscribe(render);
