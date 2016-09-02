import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const MockUserRatingsComponent = React.createClass({
  render: () => {
    return (
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-3">
          <ul className="daycare-list" style={{float: 'left'}}>
            <li><a href="">Jim's Daycare</a></li>
            <li><a href="">Gooferton & Jerri</a></li>
            <li><a href="">Merkins and Sons</a></li>
            <li><a href="">Teachers</a></li>
            <li><a href="">Jumanji</a></li>
          </ul>
        </div>

        <div className="column is-3">
          <ul className="daycare-list" style={{float: 'right'}}>
            <li>
              <i className="fa fa-star" style={{color: '#f9886c'}}></i>
              <i className="fa fa-star" style={{color: '#f9886c'}}></i>
              <i className="fa fa-star" style={{color: '#f9886c'}}></i>
              <i className="fa fa-star-half" style={{color: '#f9886c'}}></i>
            </li>
            <li>
              <i className="fa fa-star" style={{color: '#f9886c'}}></i>
              <i className="fa fa-star" style={{color: '#f9886c'}}></i>
            </li>
            <li>
              <i className="fa fa-star" style={{color: '#f9886c'}}></i>
              <i className="fa fa-star" style={{color: '#f9886c'}}></i>
              <i className="fa fa-star" style={{color: '#f9886c'}}></i>
              <i className="fa fa-star" style={{color: '#f9886c'}}></i>
            </li>
            <li>
              <i className="fa fa-star" style={{color: '#f9886c'}}></i>
              <i className="fa fa-star" style={{color: '#f9886c'}}></i>
              <i className="fa fa-star" style={{color: '#f9886c'}}></i>
            </li>
            <li>
              <i className="fa fa-star" style={{color: '#f9886c'}}></i>
              <i className="fa fa-star-half" style={{color: '#f9886c'}}></i>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});

export default MockUserRatingsComponent;







