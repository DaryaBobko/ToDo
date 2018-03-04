import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

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
        <input onChange={this.handleChange} value={this.state.newCategory}/>
        <button onClick={this.addCategory}>add</button>
        <ul>
          {this.props.testStore.map((category, index)=>
            <li key={index}>{category}</li>
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
      testStore: state.categories,
    };
  },
  dispatch => ({
    onAddCategory: (categoryName) =>{
      dispatch({type: 'ADD_CATEGORY', payload: categoryName});
    }
  })
)(AddCategory);