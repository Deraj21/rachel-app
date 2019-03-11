import React, { Component } from 'react';
const now = new Date(Date.now());


class Log extends Component {

  addZero(n){
    return n < 10 ? `0${n}` : `${n}`;
  }

  render() {
    let { name, time, staff, reason, notes } = this.props;

    let hours = this.addZero(time.getHours());
    let minutes = this.addZero(time.getMinutes());
    let fullTime = `${time.getMonth()+1}/${time.getDate()} ${hours}:${minutes}`

    return (
      <tr className="Log">
        <td>{name}</td> <td>{fullTime}</td> <td>{staff}</td> <td>{reason}</td> <td>{notes}</td> <td className="edit">edit</td>
      </tr>
    );
  }
}

export default Log;