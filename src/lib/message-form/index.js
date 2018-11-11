/* eslint no-underscore-dangle: 0 */
/* eslint-env browser */
import './index.css';
import React, { Component } from 'react';
import { FormInput } from '../components//-input/index'
import { GeoLocation } from '../components//-geo/index'
import { FileInput } from '../components//-file/index'



export class MessageForm extends Component {
	constructor(props) {
    super(props);
    this.state = {
      status: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.getGeo = this.getGeo.bind(this);
    this.getFile = this.getFile.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getUsername = this.getUsername.bind(this);
	}

  handleSubmit(event) {
		let formData = new FormData();
    formData.set('username', this.state.username);
    formData.set('email', this.state.email);
    formData.set('latitude', this.state.latitude);
    formData.set('longitude', this.state.longitude);
    formData.set('file', this.state.file);

    this.setState({status: 'Loading'});

    fetch('http://httpbin.org/post', { // Заглушка вместо страницы сервера http://localhost:8000/questions/create
      method: 'POST',
      body: formData,
      headers: { 'Access-Control-Allow-Origin': '/' },
    }).then((response) => {
      if (response.ok) {
        this.setState({status: 'Loaded'});
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

  getGeo(lat, long) {
    this.setState({ latitude: lat, longitude: long });
  }

  getUsername(value) {
    this.setState({ username: value });
  }

  getEmail(value) {
    this.setState({ email: value });
  }

  getFile(value) {
    this.setState({ file: value });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit } onKeyPress={ this.handleKeyPress}>
        <label>Information:</label>
        <FormInput name="username" label="Username: " placeholder="Your username" getValue={ this.getUsername }/>
        <FormInput name="email" label="Email: " placeholder="Your email" getValue={ this.getEmail }/>
        <GeoLocation name="coords" getGeo={ this.getGeo }/>
        <FileInput name="file" getFile={ this.getFile }/>
        <div>
          <input type="submit" className="submit" value="Submit" />
          <b className="loading">{ this.state.status }</b>
        </div>
      </form>
    );
  }
}
