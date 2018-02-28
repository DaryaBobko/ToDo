import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {App} from './app/app.jsx';
// import {combineReducers} from 'redux';
import {allReducers} from './reducer/index.jsx';

// window.addEventListener('load', () => {
//   debugger;
// const initialState = {

// };

// fanction reducer(state, action){

// } 
const store = createStore( allReducers, window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTIONS__());
// });


ReactDOM.render(
  <Provider store={store}>
    <App>
    </App>
  </Provider>, 
  document.getElementById('root'));