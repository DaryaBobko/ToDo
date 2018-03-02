
import React, { Component } from 'react';
import AddCategory from './components/addCategory/AddCategory.jsx';
import img from '../static-content/download.png';


export class App extends Component {
  
  render () {
    return(
      <div>
        <img className='logo' src={img}/>
        <AddCategory />
      </div>
    );
  }
}


