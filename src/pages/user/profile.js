import React, { Component } from 'react';
import './index.css';
import { Link } from "react-router-dom";
import * as actions from '../../store/actions';
import { connect } from 'react-redux';


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
    user: state.auth.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
    // onLogout: () => dispatch({
    //   type: actionTypes.USER_LOGOUT
    // }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);