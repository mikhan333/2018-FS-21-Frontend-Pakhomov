import React, { Component } from 'react';
import classes from './Footer.module.css';

class FooterLayout extends Component{
  render() {
    return (
      <div className={classes.Footer}>
        <p className>Created in China, by smart people</p>
      </div>
    );
  }
}

export default FooterLayout;
