/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './App.css';
import { MessageForm } from './lib/message-form/index';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MessageForm />
      </div>
    );
  }
}

export default App;
