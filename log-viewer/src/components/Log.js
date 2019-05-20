import React, { Component } from 'react';

class Log extends Component {
  constructor(props){
    super(props);

    this.state = {
      editing: true,
      newName: '',
      newTime: new Date(Date.now()),
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
  
  // handleChange - 
  handleChange(e, key){
    let obj = {};
    let val = '';
    let prevTime = this.props.time

    if (key === 'Time'){ // Time
      let newTime = e.target.value.split(':')
      val = new Date(prevTime)
      val.setHours(newTime[0])
      val.setMinutes(newTime[1])
      val.setSeconds(0)
    } else if (key === 'Date'){ // Date
      val = new Date(e.target.value);
      val.setDate(val.getDate() + 1) // date becomes offset for some reason; need to reset it
      val.setHours(prevTime.getHours())
      val.setMinutes(prevTime.getMinutes())
    } else { // Name, Staff, Reason, Notes
      val = e.target.value;
    }

    obj[`new${key === 'Date' ? 'Time' : key}`] = val;
    this.setState( obj );
  }

  formatTime(time){
    let addZero = n => n < 10 ? `0${n}` : `${n}`;
    
    let hrs = time.getHours();
    let suffix = hrs <= 12 ? 'am' : 'pm';
    hrs = hrs > 12 ? addZero(hrs - 12) : addZero(hrs)

    let mins = time.getMinutes();
    mins = addZero(mins);

    return `${time.getMonth()+1}/${time.getDate()}  ${hrs}:${mins} ${suffix}`;
  }

  render() {
    let { editing, newName, newStaff, newReason, newNotes } = this.state;
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
        <td><input onChange={e => this.handleChange(e, 'Name')} type="text" value={newName} /></td>
        <td>
          <input onChange={e => this.handleChange(e, 'Date')} type="date" />
          <input onChange={e => this.handleChange(e, 'Time')} type="time" />
        </td>
        <td><input onChange={e => this.handleChange(e, 'Staff')} type="text" value={newStaff} /></td>
        <td><input onChange={e => this.handleChange(e, 'Reason')} type="text" value={newReason} /></td>
        <td><input onChange={e => this.handleChange(e, 'Notes')} type="text" value={newNotes} /></td>
        <td onClick={() => this.saveEdits()} className="edit">save</td>
      </tr>
    );
  }
}

export default Log;