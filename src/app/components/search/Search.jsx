import React, { Component } from 'react';
import './search.scss';
import '../../../common/input/input.scss';



export class Search extends Component {
  constructor(props) {
    super(props);

  }
    

    
  render() {
    return (
      <div>
        <label><input className="checkbox-show" type="checkbox" id="checkbox" /> Show done</label>
        <label><input className="checkbox-show" type="checkbox" /> Show undone</label>
        <input className="input" value=''/>
      </div>
    );
  }
}