import React, { Component } from 'react';
// import React, { Component, PropTypes } from 'react';
// import { render } from 'react-dom';
import img from '../../../static-content/download.png';
import './menu.scss';
// import {ProgressBar} from './ProgressBar.jsx';
 import {Search} from '../search/Search.jsx';


export class Menu extends Component {
  constructor(props) {
    super(props);

  }
    

    
  render() {
    return (
      <div className='wrapper'>
        <img className='logo' src={img}/>
        <Search /> 
        {/* <ProgressBar /> */}

      </div>
    );
  }
}