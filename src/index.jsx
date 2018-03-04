import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {App} from './app/app.jsx';
// import {combineReducers} from 'redux';
// import reducers from './reducer/index.jsx';
import './index.scss';
import addCategory from './reducer/reducer.jsx';


// const initialState = {
//   categories: [ 
//     'category1',
//     'category2'
//   ],
// };

// function addCategory(state = initialState, action) {
//   if (action.type === 'ADD_CATEGORY'){

//     return {
//       categories: [...state.categories, action.payload]
//     };
//   }
//   return state;
// }

const store = createStore( addCategory, window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTIONS__());
// window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTIONS__()


ReactDOM.render(
  <Provider store={store}>
    {/* <Router>
      <App>
        <Route />
      </App>
    </Router> */}
    <App />
  </Provider>, 
  document.getElementById('app'));