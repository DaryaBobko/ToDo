
import React, { Component } from 'react';
import AddCategory from './components/addCategory/AddCategory.jsx';
// import img from '../static-content/download.png';
import {Menu} from './components/menu/Menu.jsx';


export class App extends Component {
  
  render () {
    return(
      <div className='conteiner'>
        {/* <img className='logo' src={img}/> */}
        <Menu />
        <AddCategory />
      </div>
    );
  }
}


