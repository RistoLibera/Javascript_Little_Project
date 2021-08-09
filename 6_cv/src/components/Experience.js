import React, { Component } from 'react';

export default class Experience extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formDisplay: false,
      experiences: []
    }
  }

  toggleDisplay = () => {
    this.setState((preState) => ({
      formDisplay: !preState.formDisplay
    }))
  }

  render(){

    return(
      <section>
        <header>
          <h1>Experience</h1>
          <button type="button">Edit</button>
        </header>

        <div></div>
      </section>
    )
  }
}