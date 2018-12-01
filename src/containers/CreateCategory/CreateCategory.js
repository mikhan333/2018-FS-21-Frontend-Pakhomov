/* eslint no-underscore-dangle: 0 */
/* eslint-env browser */
import './CreateCategory.css';
import React, { Component } from 'react';
import DataInput from '../../components/FormInput/DataInput/DataInput'
import { connect } from 'react-redux';
import * as actions from '../../store/actions';


class MessageForm extends Component {
	constructor(props) {
    super(props);
    this.state = {
      status: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.getName = this.getName.bind(this);
	}

  handleSubmit(event) {
		let formData = new FormData();
    formData.set('name', this.state.name);

    this.setState({status: 'Loading'});

    fetch('http://localhost:8000/categories/category_create_front/', {
      method: 'POST',
      body: formData,
      headers: { 'Access-Control-Allow-Origin': '/' },
    }).then((response) => {
      if (response.ok) {
        console.log(response);
        this.setState({status: 'Loaded'});
        this.props.getCategories();
      }
      else {
        this.setState({status: 'An error has occurred'});
      }
    }).catch(() => {
      this.setState({status: 'An error has occurred'});
    });

    event.preventDefault();
  }

  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.dispatchEvent(new Event('submit'));
    }
  }

  getName(value) {
    this.setState({ name: value });
  }

  render() {
    return (
      <div className="user_form">
        <form onSubmit={ this.handleSubmit } onKeyPress={ this.handleKeyPress}>
          <label>Information:</label>
          <DataInput name="category" elementType="input" label="Category: " placeholder="Category name" getValue={ this.getName }/>
          <div>
            <input type="submit" className="submit" value="Submit" />
            <b className="loading">{ this.state.status }</b>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(actions.categories())
  };
};

export default connect(mapDispatchToProps)(MessageForm);