/* eslint no-underscore-dangle: 0 */
/* eslint-env browser */
import React, { Component } from 'react';
import './DataInput.css';

class DataInput extends Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.getValue(event.target.value);
	}


  render() {
    let inputElement = null;
    switch (this.props.elementType) {
      case('input'):
          inputElement = <input
            className="form_input"
            name={ this.props.name }
            placeholder={ this.props.placeholder }
            value={ this.state.value }
            onChange={ this.handleChange }
          />
          break;
      case('textarea'):
          inputElement = <textarea
            className="form_input"
            name={ this.props.name }
            placeholder={ this.props.placeholder }
            value={ this.state.value }
            onChange={ this.handleChange }
          />;
          break;
      default:
        inputElement = <input
          className="form_input"
          name={ this.props.name }
          placeholder={ this.props.placeholder }
          value={ this.state.value }
          onChange={ this.handleChange }
        />
  }
    return (
      <div >
          {/* <label>{ this.props.label }</label> */}
          { inputElement }
          {/* <input
            className="form_input"
            name={ this.props.name }
            placeholder={ this.props.placeholder }
            value={ this.state.value }
            onChange={ this.handleChange }
          /> */}
      </div>
    );
  }
}

export default DataInput;
