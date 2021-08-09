import React, { Component } from 'react';
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';

export default class Resume extends Component {
  render() {
    return (
      <div className="container">
        <Personal />
        <Experience />
        <Education />
      </div>
    )
  }
}