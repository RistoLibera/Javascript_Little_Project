import { getAllProjects, findProject, syncProject, 
        getCurrentProject, createNewProject} from "./project"
import {showTodos} from "./todo"

const modalSections = document.getElementsByClassName("modal")
const sidebar = document.querySelector(".project")
const toggleBtn = document.querySelector(".toggle-project")
const toggleIcons = document.querySelectorAll(".toggle-icons")
const addProjectBtn = document.getElementById("add-project")
const newProjectModal = document.querySelector(".new-project-form-modal")  
const newProjectForm = document.querySelector(".new-project-form")
const cancelBtns = document.getElementsByClassName("cancel")
const projectList = document.querySelector(".project-list")
const projectBody = document.querySelector(".project-body")
const projectName = document.querySelector(".project-name")
const todoList = document.querySelector(".todo-list")
const projectsList = document.getElementsByClassName("list-item")

// Show or hide sidebar
let canToggleSideBar = (() => {
  toggleBtn.onclick = () => {
    sidebar.classList.toggle("active")
    toggleIcons.forEach((icon) => icon.classList.toggle("hidden"))
  }
})()

// Open new project form
let canTriggerNewProjectForm = (() => {
  addProjectBtn.onclick = () => {
    newProjectModal.classList.toggle("hidden")
  }
})()

// Create project
let canCreateProject = (() => {
  newProjectForm.addEventListener("submit", createNewProject)
})()

// Cancel form
let canCancelForm = (() => {
  let buttonsArray = Array.from(cancelBtns)
  buttonsArray.forEach((button) => {
    let modal = button.closest("section")
    button.onclick = () => {
      modal.classList.toggle("hidden")
    }
  })
})()

// Cancel form by clicking outside
let canClickOutside = (() => {
  window.addEventListener("click", (e) => {
    let classes = e.target.className.split(" ")
    let hasModal = classes.some((oneclass) => oneclass == "modal")
    if (hasModal) {
      let modals = Array.from(modalSections)
      modals.forEach((section) => {
        section.classList.add("hidden")
      } )
    }
  })  
})()

// Show projects
let canShowProject = (() => {
  let allProjects = getAllProjects()
  allProjects.map((project) => {
    let newLine = document.createElement("li")
    newLine.innerHTML = project.name
    newLine.classList.add("list-item")
    projectList.appendChild(newLine)
  })
})()

// Show todo
let canShowContent = (() => {
  let projectsArray = Array.from(projectsList)
  projectsArray.forEach((listItem) => {    
    listItem.addEventListener("click",(e) => {
      let project = findProject(listItem.textContent)
      // Synchronize current project
      syncProject(project)
      // Auto update project content
      projectName.innerHTML = project.name
      todoList.innerHTML = showTodos(project)
      projectBody.classList.remove("hidden")  
      location.reload()
    })
  })
})()

// Display current project
const canDisplayCurrentProject = (() => {
  let projectsArray = Array.from(projectsList)
  let storedProject = getCurrentProject()
  projectsArray.forEach((listItem) => {
    listItem.classList.remove("selected")
    let currentProject = findProject(listItem.textContent)
    if (currentProject.name == storedProject.name) {
      listItem.classList.add("selected")
    }
  })
})()

