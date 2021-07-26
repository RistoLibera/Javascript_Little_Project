import {Project, storeProject, getAllProjects, findProject, syncProject} from "./project"

const sidebar = document.querySelector(".project")
const toggleBtn = document.querySelector(".toggle-project")
const toggleIcons = document.querySelectorAll(".toggle-icons")
const addProjectBtn = document.getElementById("add-project")
const newProjectModal = document.querySelector(".new-project-form-modal")  
const newProjectForm = document.querySelector(".new-project-form")
const cancelBtn = document.querySelector(".cancel-project")
const projectList = document.querySelector(".project-list")
const projectBody = document.querySelector(".project-body")
const projectName = document.querySelector(".project-name")

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

// Cancel form
let cancelForm = (() => {
  cancelBtn.onclick = () => {
    newProjectModal.classList.toggle("hidden")
  }
})()

// Show projects
let showProject = (() => {
  let allProjects = getAllProjects()
  allProjects.map((project, index) => {
    let newLine = document.createElement("li")
    newLine.innerHTML = project.name
    newLine.classList.add("list-item")
    projectList.appendChild(newLine)
  })
})()

// Show todo
let showContent = (() => {
  let projects = document.getElementsByClassName("list-item")
  let projectsArray = Array.from(projects)
  projectsArray.forEach((listItem) => {    
    listItem.addEventListener("click",() => {
      let project = findProject(listItem.textContent)
      // Synchronize current project
      syncProject(project)
      showProjectName(project)
      // here !
      projectBody.classList.remove("hidden")  
    })
  })

  // Update project name
  let showProjectName = (project) => {
    projectName.innerHTML = project.name
  }

  // Update todo list 
  let showTodos = (project) => {
    
  }
})()



