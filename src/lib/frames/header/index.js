import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './index.css';

export class HeaderLayout extends Component{
  render() {
    return (
      <div className="Header">
        <ul>
          <NavLink to="/">Main Page</NavLink>&emsp;
          <NavLink to="/register">Create user</NavLink>&emsp;
          <NavLink to="/topics">Topics</NavLink>&emsp;
          <NavLink to="/profile">Profile</NavLink>
        </ul>
      </div>
    );
  }
}