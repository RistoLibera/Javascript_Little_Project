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
      formDisplay: !prevState.formDisplay,
    }))
  }

  editExperiences = (index) => {
    let newExperiences = this.state.experiences
    newExperiences.splice(index, 1, "Edited")
    this.setState({
      experiences: newExperiences
    })
    this.toggleDisplay()
  }

  deleteExperiences = (index) => {
    let newExperiences = this.state.experiences
    newExperiences.splice(index, 1)
    this.setState({
      experiences: newExperiences
    })
  }

  information = () => {
    const experiences = this.state.experiences
    let info
    if (experiences.length > 0 ) {
      info = experiences.map((company, index) => {
        return(
          <div key={index} className="block">
            <div className="info-line">
              <p>Company: </p>
              <p>{company.name}</p>
            </div>
            <div className="info-line">
              <p>Title: </p>
              <p>{company.title}</p>
            </div>
            <div className="info-line">
              <p>Duration: </p> 
              <p>{company.duration}</p>
            </div>
            <div className="edit-line">
              <button type="button" onClick={() => this.editExperiences(index)}>Edit</button>
              <button type="button" onClick={() => this.deleteExperiences(index)}>Delete</button>
            </div>
          </div>
        )
      })
    } else {
      info = (
        <div className="block">
          <div className="info-line">
            <p>Company: </p>
            <p>Blank</p>
          </div>
          <div className="info-line">
            <p>Title: </p>
            <p>Blank</p>
          </div>
          <div className="info-line">
            <p>Duration: </p> 
            <p>Blank</p>
          </div>
        </div>
      )
    }
    return info
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let inputs = e.target.elements
    let company = inputs.company.value
    let title = inputs.title.value
    let duration = inputs.duration.value
    let newCompany = {
      name: company,
      title: title,
      duration: duration
    }

    let newExperiences = this.state.experiences
    let editedPosition = newExperiences.findIndex((experience) => experience === "Edited")
    if (editedPosition >= 0 ) {
      newExperiences.splice(editedPosition, 1, newCompany)
      this.setState({
        formDisplay: false,
        experiences: newExperiences
      })  
    } else {
      newExperiences.push(newCompany)
      this.setState({
        formDisplay: false,
        experiences: newExperiences
      })  
    }
  }

  form = () => {
    return(
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label htmlFor="company">Company:</label>
          <input id="company" name="company" type="text" required/>
        </fieldset>

        <fieldset>
          <label htmlFor="title">Title:</label>
          <input id="title" name="title" type="text" required/>
        </fieldset>

        <fieldset>
          <label htmlFor="duration">Duration:</label>
          <input id="duration" name="duration" type="text" required/>
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
          <h1>Experience</h1>
          <button type="button" onClick={this.toggleDisplay}>New</button>
        </header>

        <div>{content}</div>
      </section>
    )
  }
}