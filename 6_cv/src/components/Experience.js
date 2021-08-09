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
    this.setState((prevState) => ({
      formDisplay: !prevState.formDisplay
    }))
  }

  render(){
    // let content
    // if (this.state.formDisplay) {
    //   content = this.form()
    // } else {
    //   content = this.information()
    // }

    return(
      <section>
        <header>
          <h1>Experience</h1>
          <button type="button" onClick={this.toggleDisplay}>New</button>
        </header>

        {/* <div>{content}</div> */}
      </section>
    )
  }
}