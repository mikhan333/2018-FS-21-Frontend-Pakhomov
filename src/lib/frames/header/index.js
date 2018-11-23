import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './index.css';
import { connect } from 'react-redux';
// import * as actionTypes from '../../store/action';

class HeaderLayout extends Component{
  render() {
    return (
      <div className="Header">
        { this.props.user.is_authorized ? (
          <ul>
            <NavLink to="/">Main Page</NavLink>&emsp;
            <NavLink to="/register">Create topic</NavLink>&emsp;
            <NavLink to="/topics">Topics</NavLink>&emsp;
            <NavLink to="/profile">Profile - { this.props.user.login }</NavLink>&emsp;
            {/* <NavLink to="/" onClick={ this.props.onLogout }>Logout</NavLink>&emsp; */}
          </ul>

        ) : (
          <ul>
            <NavLink to="/">Main Page</NavLink>&emsp;
            <NavLink to="/topics">Topics</NavLink>&emsp;
            <NavLink to="/login">Login</NavLink>&emsp;
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.usr.user,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onLogin: () => {
//       dispatch({
//         type: actionTypes.USER_LOGIN
//       })
//     },
//     onLogout: () => dispatch({
//       type: actionTypes.USER_LOGOUT
//     }),
//   };
// };

export default connect(mapStateToProps)(HeaderLayout);