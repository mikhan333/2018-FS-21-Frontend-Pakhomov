/* eslint no-underscore-dangle: 0 */
/* eslint-env browser */
import React, { Component } from 'react';
import './FileInput.css';

export class FileInput extends Component {
	constructor(props) {
    super(props);
    this.state = { url: '', value: '', getFile: props.getFile };

    this.handleDrop = this.handleDrop.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
	}

  handleDrag(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  handleDrop(event) {
    const url = URL.createObjectURL(event.dataTransfer.files[0]);
    this.setState({url: url});
    this.props.getFile(event.dataTransfer.files[0]);
    event.stopPropagation();
    event.preventDefault();
  }

  handleChange(event) {
    const url = URL.createObjectURL(event.target.files[0]);
    this.setState({url: url});
    this.props.getFile(event.target.files[0]);
    event.preventDefault();
  }

  handleLoad(event) {
    URL.revokeObjectURL(this.state.url)
  }

  render() {
    return (
      <div onDrag={ this.handleDrag } onDrop={ this.handleDrop }>
        <label>File:</label>
        <input
          className="file_input"
          type="file"
          name={ this.props.name }
          onChange={ this.handleChange }
          onLoad={ this.handleLoad }
        />
        <br />
        <img
          className="picture"
          src={ this.state.url }
          width="400"
          alt=""
        />
      </div>
    );
  }
}
