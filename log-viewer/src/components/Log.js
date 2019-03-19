import React, { Component } from 'react';

class Log extends Component {
  constructor(props){
    super(props);

    this.state = {
      editing: false,
      newName: '',
      newTime: null,
      newDate: null,
      newStaff: '',
      newReason: '',
      newNotes: ''
    }
  }

  startEditing(){
    let { name, time, staff, reason, notes } = this.props;
    this.setState({
      newName: name,
      newTime: time,
      newStaff: staff,
      newReason: reason,
      newNotes: notes,
      editing: true
    });
  }

  saveEdits(){
    let { index } = this.props;
    let { newName, newTime, newStaff, newReason, newNotes } = this.state;

    this.props.updateLog(index, {
      name: newName,
      time: newTime,
      staff: newStaff,
      reason: newReason,
      notes: newNotes
    });

    this.setState({
      editing: false
    });
  }
  
  handleChange(e){
    let key = e.target.getAttribute('data-key');
    let obj = {};
    let val = null;

    if (key === 'Time'){
      //
    } else if (key === 'Date'){
      //
    } else {
      val = e.target.value;
    }

    obj[`new${key}`] = val;

    this.setState( obj );
  }

  formatTime(time){
    let addZero = n => n < 10 ? `0${n}` : `${n}`;

    let hrs = time.getHours();
    hrs = hrs >= 12 ? addZero(hrs) : addZero(hrs - 12);

    let mins = time.getMinutes();
    mins = addZero(mins);

    let suffix = hrs <= 12 ? 'am' : 'pm';

    return `${time.getMonth()+1}/${time.getDate()}  ${hrs}:${mins} ${suffix}`;
  }

  render() {
    let { editing, newName, newTime, newDate, newStaff, newReason, newNotes } = this.state;
    let { name, time, staff, reason, notes } = this.props;

    let fullTime = this.formatTime(time);

    return (
      !editing
      ?
      <tr className="Log">
        <td>{name}</td>
        <td>{fullTime}</td>
        <td>{staff}</td>
        <td>{reason}</td>
        <td>{notes}</td>
        <td onClick={() => this.startEditing()} className="edit">edit</td>
      </tr>
      :
      <tr className="Log">
        <td><input onChange={e => this.handleChange(e)} data-key="Name" type="text" value={newName} /></td>
        <td>
          <input onChange={e => this.handleChange(e)} data-key="Date" type="date" />
          <input onChange={e => this.handleChange(e)} data-key="Time" type="time" />
        </td>
        <td><input onChange={e => this.handleChange(e)} data-key="Staff" type="text" value={newStaff} /></td>
        <td><input onChange={e => this.handleChange(e)} data-key="Reason" type="text" value={newReason} /></td>
        <td><input onChange={e => this.handleChange(e)} data-key="Notes" type="text" value={newNotes} /></td>
        <td onClick={() => this.saveEdits()} className="edit">save</td>
      </tr>
    );
  }
}

export default Log;