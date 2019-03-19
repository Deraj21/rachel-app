import React, { Component } from 'react';
import Log from './Log';


class ViewLogs extends Component {


  render() {
    let { logData } = this.props;

    let logs = logData.map((log, i) => {
      let {name, time, staff, reason, notes} = log;
      return <Log updateLog={this.props.updateLog} index={i} name={name} time={time} staff={staff} reason={reason} notes={notes} key={`log-${i}`}/>
    });

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