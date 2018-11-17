/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './App.css';
import { MessageForm } from './lib/user-form/index';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HeaderLayout } from './lib/frames/header/index';
import { FooterLayout } from './lib/frames/footer/index';
import { HomePage } from './lib/pages/home-page/index';
import { ProfilePage } from './lib/pages/user-profile/index';
import { Topics } from './lib/pages/topics/index';

const browserHistory = Router.browserHistory;

const App = () => (
  <Router history={browserHistory}>
    <div className="App">
      <HeaderLayout />
      <div className="main_part">
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={MessageForm} />
        <Route path="/topics" component={Topics} />
        <Route path="/profile" component={ProfilePage} />
      </div>
      {/* <FooterLayout /> */}
    </div>
  </Router>
);


export default App;
