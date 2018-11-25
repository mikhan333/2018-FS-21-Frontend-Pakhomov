import React, { Component } from 'react';
import './index.css';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';
import { FormInput } from '../../components/-input/index'
import { NavLink } from "react-router-dom";


class RegisterPage extends Component{
  constructor(props) {
    super(props);

    this.getUsername = this.getUsername.bind(this);
	}

  getUsername(value) {
    this.setState({ username: value });
  }

  render() {
    return (
      <div className="ProfileUser">
        <FormInput name="username" label="Username: " placeholder="Your username" getValue={ this.getUsername } />
        <NavLink to="/" >
          <input type="submit" className="submit" value="Login" onClick={ () => this.props.onLogin(this.state.username) }/>
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.usr.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (name) => {
      console.log(name)
      dispatch({
        login: name,
        type: actionTypes.USER_LOGIN
      })
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);