import React from 'react';
import ReactDOM from 'react-dom';

const SectionComponent = React.createClass({
  render: () => {
    return (
      <section className="section">
        <div className="container">
          <div>
            <h1 className="title">About</h1>
            <h2 className="subtitle">
              This is the about section.  Hello, this section is about the creators of this app.  Holy crap, what a fuckin section.  Nice shit, bro.
            </h2>
          </div>
        </div>
      </section>
    )
  }
});

export default SectionComponent;
