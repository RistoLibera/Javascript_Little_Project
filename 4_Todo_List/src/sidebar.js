import {Project, storeProject} from "./project"

const sidebar = document.querySelector(".project")
const toggleBtn = document.querySelector(".toggle-project")
const toggleIcons = document.querySelectorAll(".toggle-icons")
const addProjectBtn = document.getElementById("add-project")
const newProjectModal = document.querySelector(".new-project-form-modal")  
const newProjectForm = document.querySelector(".new-project-form")
const cancelBtn = document.querySelector(".cancel-project")

// Show or hide sidebar
let toggleSideBar = (() => {
  toggleBtn.onclick = () => {
    sidebar.classList.toggle("active")
    toggleIcons.forEach((icon) => icon.classList.toggle("hidden"))
  }
})()

// Open new project form
let triggerForm = (() => {
  addProjectBtn.onclick = () => {
    newProjectModal.classList.toggle("hidden")
  }
})()

// Create project
let createProject = (() => {
  const createProject = (e) => {
    let projectName = e.target.elements.name.value
    let newProject = Project(projectName)
    storeProject(newProject)
  }

  newProjectForm.addEventListener("submit", createProject)
})()

// Canel form
let cancelForm = (() => {
  cancelBtn.onclick = () => {
    newProjectModal.classList.toggle("hidden")
  }
})()



