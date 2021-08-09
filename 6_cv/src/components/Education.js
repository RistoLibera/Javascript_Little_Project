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
    this.setState((prevState) => ({
      formDisplay: !prevState.formDisplay,
      educations: prevState.educations
    }))
  }

  editEducation = (index) => {
    let newEducations = this.state.educations
    newEducations.splice(index, 1, "Edited")
    this.setState({
      educations: newEducations
    })
    this.toggleDisplay()
  }

  deleteEducation = (index) => {
    let newEducations = this.state.educations
    newEducations.splice(index, 1)

    this.setState({
      educations: newEducations
    })
  }

  information = () => {
    const educations = this.state.educations
    let info
    if (educations.length > 0 ) {
      info = educations.map((school, index) => {
        return(
          <div key={index} className="block">
            <div className="info-line">
              <p>School: </p>
              <p>{school.name}</p>
            </div>
            <div className="info-line">
              <p>Certificate: </p>
              <p>{school.certificate}</p>
            </div>
            <div className="info-line">
              <p>Graduation: </p> 
              <p>{school.graduation}</p>
            </div>
            <div className="edit-line">
              <button type="button" onClick={() => this.editEducation(index)}>Edit</button>
              <button type="button" onClick={() => this.deleteEducation(index)}>Delete</button>
            </div>
          </div>
        )
      })
    } else {
      info = (
        <div className="block">
          <div className="info-line">
            <p>School: </p>
            <p>Blank</p>
          </div>
          <div className="info-line">
            <p>Certificate: </p>
            <p>Blank</p>
          </div>
          <div className="info-line">
            <p>Graduation: </p> 
            <p>Blank</p>
          </div>
        </div>
      )
    }
    return info
  }

  handleSubmit = (e) => {
    console.log(this.state.educations)

    e.preventDefault()
    let inputs = e.target.elements
    let school = inputs.school.value
    let certificate = inputs.certificate.value
    let graduation = inputs.graduation.value
    let newSchool = {
      name: school,
      certificate: certificate,
      graduation: graduation
    }

    let newEducations = this.state.educations
    let editedPosition = newEducations.findIndex((education) => education === "Edited")
    if (editedPosition >= 0 ) {
      newEducations.splice(editedPosition, 1, newSchool)
      this.setState({
        formDisplay: false,
        educations: newEducations
      })  
    } else {
      newEducations.push(newSchool)
      this.setState({
        formDisplay: false,
        educations: newEducations
      })  
    }
  }

  form = () => {
    return(
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label htmlFor="school">School:</label>
          <input id="school" name="school" type="text" required/>
        </fieldset>

        <fieldset>
          <label htmlFor="certificate">Certificate:</label>
          <input id="certificate" name="certificate" type="text" required/>
        </fieldset>

        <fieldset>
          <label htmlFor="graduation">Graduation:</label>
          <input id="graduation" name="graduation" type="text" required/>
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
          <h1>Education</h1>
          <button type="button" onClick={this.toggleDisplay}>New</button>
        </header>

        <div>{content}</div>
      </section>
    )
  }
}