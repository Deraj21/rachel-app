import React, { Component } from 'react';
import Header from './components/Header';
import ViewLogs from './components/ViewLogs';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      logData: []
    };

    this.createNewLog = this.createNewLog.bind(this);
    this.updateLog = this.updateLog.bind(this);
  }

  createNewLog(){
    let { logData } = this.state;
    let newLogData = [...logData];
    newLogData.push({
      name: '',
      time: new Date(Date.now()),
      staff: '',
      reason: '',
      notes: ''
    });

    this.setState({
      logData: newLogData
    })
  }

  updateLog(index, newLog){
    let { logData } = this.state;
    let newLogData = [...logData];
    newLogData.splice(index, 1, newLog);

    this.setState({ logData: newLogData })
  }

  render() {
    let { logData } = this.state;

    return (
      <div className="App">
        <Header createNewLog={this.createNewLog}/>
        <ViewLogs logData={logData} updateLog={this.updateLog} />
      </div>
    );
  }
}

export default App;
