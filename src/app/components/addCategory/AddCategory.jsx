// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './addCategory.scss';
import '../../../common/input/input.scss';

class AddCategory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newCategory: '',
    };

    this.addCategory = this.addCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addCategory() {
    this.props.onAddCategory(this.state.newCategory);
    this.setState({
      newCategory: '',
    });

  }
  handleChange(event){
    this.setState({
      newCategory: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input className='input' onChange={this.handleChange} value={this.state.newCategory}/>
        <button className='add-name' onClick={this.addCategory}>add</button>
        <ul>
          {this.props.categories.map((category, index)=>
            <li key={index}>{category.name}</li>
          )} 
        </ul>

      </div>
    );
  }

}

AddCategory.propTypes = {
  // testStore: PropTypes.array(),
  // onAddCategory: PropTypes.func,
};

AddCategory.defaultProps = {
  testStore: [],
};

export default connect(
  state => {
    console.log('state', state);
    return {
      categories: state.categories,
    };
  },
  dispatch => ({
    onAddCategory: (name) =>{
      const payload = {
        id: Date.now().toString(), 
        name
      }
      dispatch({type: 'ADD_CATEGORY', payload});
    }
  })
)(AddCategory);