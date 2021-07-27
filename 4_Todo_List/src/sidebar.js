import {Project, storeProject, getAllProjects, 
        findProject, syncProject, createNewProject} from "./project"
import {getTodoContent} from "./todo"

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
  let projects = document.getElementsByClassName("list-item")
  let projectsArray = Array.from(projects)
  projectsArray.forEach((listItem) => {    
    listItem.addEventListener("click",() => {
      let project = findProject(listItem.textContent)
      // Synchronize current project
      syncProject(project)
      showProjectName(project)
      showTodos(project)
      projectBody.classList.remove("hidden")  
    })
  })

  // Update project name
  let showProjectName = (project) => {
    projectName.innerHTML = project.name
  }

  // Update todo list 
  let showTodos = (project) => {
    let todoItems = getTodoContent(project)
    if (todoItems) {
      todoList.innerHTML =  todoItems.map((tableRow) => tableRow).join("")
    }
  }
})()

