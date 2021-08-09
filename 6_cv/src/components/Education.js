import React, { Component } from 'react';

export default class Education extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formDisplay: false,
      educations: []
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
          <h1>Education</h1>
          <button type="button">Edit</button>
        </header>

        <div></div>
      </section>
    )
  }
}