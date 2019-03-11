import React, { Component } from 'react';

class Header extends Component {

  render() {

    return (
      <div className="Header">
        <div className="upper">
          <h1>Logs</h1>
          <button> <h2>+</h2> <h3>Add New</h3> </button>
        </div>
        <table>
          <tr>
            <td>Name</td> <td>Time</td> <td>Staff</td> <td>Reason</td> <td>Notes</td> <td className="edit">{/* edit column */}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Header;
