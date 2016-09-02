import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const MinHeaderComponent = React.createClass({
  render: () => {
    return (
      <section>
        <nav className="nav" style={{position: 'fixed', width: '100%'}}>
          <div className="nav-left">
            <Link className="nav-item" to="/">
              <img src="/img/balloon.png" style={{paddingRight: '5px'}} />
              <h1 className="logo">Baby Dump</h1>
            </Link>
          </div>
        </nav>
      </section>
    )
  }
});

export default MinHeaderComponent;
