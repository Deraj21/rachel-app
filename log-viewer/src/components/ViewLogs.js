import React, { Component } from 'react';
import Log from './Log';

const logData = [
  { name: 'Jane Smith', time: new Date(Date.now()), staff: 'Nathan', reason: 'needs insurance', notes: 'She is very grumpy'},
]

class ViewLogs extends Component {


  render() {

    let logs = logData.map(log => {
      let {name, time, staff, reason, notes} = log;
      return <Log name={name} time={time} staff={staff} reason={reason} notes={notes}/>
    })

    return (
      <div className="ViewLogs">
        <table>
          { logs }
        </table>
      </div>
    );
  }
}

export default ViewLogs;