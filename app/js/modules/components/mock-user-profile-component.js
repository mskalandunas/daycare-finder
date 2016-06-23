import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const MockUserProfileComponent = React.createClass({
  render: () => {
    return (
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-3">
          <ul className="daycare-list" style={{float: 'left', fontWeight: '700'}}>
            <li>Username</li>
            <li>Email</li>
            <li>Password</li>
          </ul>
        </div>

        <div className="column is-3">
          <ul className="daycare-list" style={{float: 'right'}}>
            <li style={{color: '#f9886c'}}>Danny "The Z-Bag" Zwelling</li>
            <li style={{color: '#f9886c'}}>dzwellers@gmail.com</li>
            <li className="control has-addons">
              <input className="input input-large input-no-border input-is-primary-focus" type="text" placeholder="Type a new password"/>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});

export default MockUserProfileComponent;




