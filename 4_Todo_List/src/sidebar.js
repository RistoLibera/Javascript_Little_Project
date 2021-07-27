import {Project, storeProject, getAllProjects, 
        findProject, syncProject, createNewProject} from "./project"

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

// Show or hide sidebar
let canToggleSideBar = (() => {
  toggleBtn.onclick = () => {
    sidebar.classList.toggle("active")
    toggleIcons.forEach((icon) => icon.classList.toggle("hidden"))
  }
})()

// Open new project form
let canTriggerProjectForm = (() => {
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
    button.onclick = () => {
      newProjectModal.classList.toggle("hidden")
    }
  })
})()

// Show projects
let canShowProject = (() => {
  let allProjects = getAllProjects()
  allProjects.map((project, index) => {
    let newLine = document.createElement("li")
    newLine.innerHTML = project.name
    newLine.classList.add("list-item")
    projectList.appendChild(newLine)
  })
})()

// Show todo
let canShowContent = (() => {
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



