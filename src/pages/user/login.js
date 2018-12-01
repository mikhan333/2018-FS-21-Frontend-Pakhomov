import React, { Component } from 'react';
import './index.css';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import { FormInput } from '../../components/FormInput/DataInput/DataInput'
import { NavLink } from "react-router-dom";


class LoginPage extends Component{
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
        </NavLink>&emsp; {/* <p>or</p><NavLink to="/registration">Registration</NavLink> */ }

      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    user: state.auth.user,
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);