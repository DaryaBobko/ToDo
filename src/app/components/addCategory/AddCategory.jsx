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

// store.subscribe(() => {
//   console.log('subscribe' store.getState());
//   const list = document.querySelectorAll('.list')[0];
//   store.getState().forEach(categry =>{
//     const li = document.createElement('li');
//     li.textContent = categry;
//     list.appendChild(li);
//   });
// })

  addCategory() {
    //console.log(this.state.newCategory);
    this.props.onAddCategory(this.state.newCategory);
    this.setState({
      newCategory: '',
    });
// store.dispatch({type: 'add_category', payload:this.state.newCategory});
  }
  handleChange(event){
    this.setState({
      newCategory: event.target.value,
    });
  }

  render() {
  // console.log(this.props.testStore);
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
//  мапит стеит в пропс реакт компонента, позволяет следить за изменением компонента
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