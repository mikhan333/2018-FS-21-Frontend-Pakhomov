import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class CategoryMain extends Component{
  updateCategories () {
    this.props.getCategories();
  }

  render() {
    const categories = this.props.categories.map(item => {
      return <li key={item.id}><Link to={`${this.props.match.url}/${item.id}`}>{item.name}</Link></li>
    });
    return (
      <div>
        <h3>Please select a topic:</h3>
        <hr />
        <ul>
          { categories }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.ctr.categories,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(actions.categories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMain);
