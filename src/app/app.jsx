
import React from 'react';
import {AwesomeComponent} from './components/AwesomeComponent.jsx';
import img from '../static-content/download.png';


export class App extends React.Component {
  
  render () {
    return(
      <div>
        <img src={img}/>
        <p>Hello s11ss</p>
        <AwesomeComponent />
      </div>
    );
  }
}


