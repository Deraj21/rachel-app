import React, { Component } from 'react';
import Header from './components/Header';
import ViewLogs from './components/ViewLogs';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <ViewLogs />
      </div>
    );
  }
}

export default App;
