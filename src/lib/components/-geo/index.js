/* eslint no-underscore-dangle: 0 */
/* eslint-env browser */
import React, { Component } from 'react';
import getPosition from './geo';
import './index.css';

export class GeoLocation extends Component {
	constructor(props) {
    super(props);
    this.state = { latitude: '', longitude: '' };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
	}

  handleChange(event) {}

	handleClick(event) {
    const geoPromise = getPosition();
    geoPromise
      .then((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
          this.props.getGeo(position.coords.latitude, position.coords.longitude);
      })
      .catch((err) => {
        this.setState({ latitude: err.message, longitude: err.message });
      });

    event.preventDefault();
	}

  render() {
    return (
      <div>
        <label>GeoLocation: </label><br />
          <input
            className="form_input"
            name={ this.props.name }
            placeholder="Your latitude"
            value={ this.state.latitude }
            onClick={ this.handleClick }
            onChange={ this.handleChange }
          /><br />
          <input
            className="form_input"
            name={ this.props.name }
            placeholder="Your longitude"
            value={ this.state.longitude }
            onClick={ this.handleClick }
            onChange={ this.handleChange }
          />
      </div>
    );
  }
}
