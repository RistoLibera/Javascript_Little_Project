import {getAllProjects, getCurrentProject} from "./project"

const projectBody = document.querySelector(".project-body")
const projectName = document.querySelector(".project-name")

// Hide body when no projects
const autoHideBody = (() => {
  let allProjects = getAllProjects()
  if (allProjects.length == 0) {
    projectBody.classList.add("hidden")
  }
})()

// Show last checked project
const autoShowBody = (() => {
  let currentProject = getCurrentProject()
  if (currentProject) {
    projectName.innerHTML = currentProject.name
    projectBody.classList.remove("hidden")
  } 
})()

// Edit project name


// remember to delete two storage