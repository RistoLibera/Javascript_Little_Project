import React, { Component } from 'react';

export default class Person extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formDisplay: false,
      fullname: '',
      email: '',
      phoneNumber: ''
    }
  }

  toggleDisplay = () => {
    this.setState((preState) => ({
      formDisplay: !preState.formDisplay
    }))
  }

  information = () => {
    return(
    <div className="block">
      <div className="info-line">
        <p>Fullname: </p>
        <p>{this.state.fullname}</p>
      </div>
      <div className="info-line">
        <p>Email: </p>
        <p>{this.state.email}</p>
      </div>
      <div className="info-line">
        <p>Phone Number: </p> 
        <p>{this.state.phoneNumber}</p>
      </div>
    </div>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let inputs = e.target.elements
    let fullname = inputs.fullname.value
    let email = inputs.email.value
    let phoneNumber = inputs.phoneNumber.value

    this.setState({
      formDisplay: false,
      fullname: fullname,
      email: email,
      phoneNumber: phoneNumber
    })
  }

  form = () => {
    return(
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label htmlFor="fullname">Fullname:</label>
          <input id="fullname" name="fullname" type="text" defaultValue={this.state.fullname} required/>
        </fieldset>

        <fieldset>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" defaultValue={this.state.email} required/>
        </fieldset>

        <fieldset>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input id="phoneNumber" name="phoneNumber" type="text" defaultValue={this.state.phoneNumber} required/>
        </fieldset>

        <fieldset>
          <input id="submit" type="submit" value="submit" />
        </fieldset>
      </form>
    )
  }



  render(){
    let content
    if (this.state.formDisplay) {
      content = this.form()
    } else {
      content = this.information()
    }

    return(
      <section>
        <header>
          <h1>Personal</h1>
          <button type="button" onClick={this.toggleDisplay}>Edit</button>
        </header>

        <div>{content}</div>
      </section>
    )
  }

}