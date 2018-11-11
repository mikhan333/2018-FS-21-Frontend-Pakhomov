/* eslint no-underscore-dangle: 0 */
/* eslint-env browser */
import React, { Component } from 'react';
import './index.css';

export class FormInput extends Component {
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
    return (
      <div >
          {/* <label>{ this.props.label }</label> */}
          <input
            className="form_input"
            name={ this.props.name }
            placeholder={ this.props.placeholder }
            value={ this.state.value }
            onChange={ this.handleChange }
          />
      </div>
    );
  }
}
