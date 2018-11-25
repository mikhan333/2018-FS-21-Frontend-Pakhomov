import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import { connect } from 'react-redux';

class CategoryMain extends Component{
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

export default connect(mapStateToProps)(CategoryMain);
