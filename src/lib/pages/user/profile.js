import React, { Component } from 'react';
import './index.css';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';




class ProfilePage extends Component{
  render() {
    return (
      <div className="ProfileUser">
        <h2>You are brilliant -> you can logout</h2>
        <Link to="/" >
          <input type="submit" className="submit" value="Logout" onClick={ () => this.props.onLogout() }/>
        </Link>&emsp;
        <h2><Link to="/topics">Topics</Link></h2>
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
    onLogout: () => dispatch({
      type: actionTypes.USER_LOGOUT
    }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);