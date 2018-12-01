import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import classes from './Header.module.css';
import { connect } from 'react-redux';
// import * as actionTypes from '../../store/action';

class HeaderLayout extends Component{
  render() {
    let routes = (
      <ul>
        <NavLink to="/">Main Page</NavLink>&emsp;
        {/* <NavLink to="/categories">Topics</NavLink>&emsp; */}
        <NavLink to="/login">Login</NavLink>&emsp;
      </ul>
  );

  if(this.props.isAuthed) {
    routes = (
      <ul>
        <NavLink to="/">Main Page</NavLink>&emsp;
        <NavLink to="/question_create">Create quest</NavLink> /
        <NavLink to="/category_create">category</NavLink>&emsp;
        <NavLink to="/questions">Questions</NavLink>&emsp;
        <NavLink to="/categories">Categories</NavLink>&emsp;
        <NavLink to="/profile">Profile - { this.props.user.login }</NavLink>&emsp;
      </ul>
    )
  }

    return (
      <div className={classes.Header}>
        { routes }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthed: state.auth.token !== null,
    user: state.auth.user,
  }
};

export default connect(mapStateToProps)(HeaderLayout);