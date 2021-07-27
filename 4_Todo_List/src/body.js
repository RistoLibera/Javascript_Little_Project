import {getAllProjects, getCurrentProject, editThisProject, 
        deleteThisProject, syncProject, updateProjectStorage} from "./project"
import {createTodo} from "./todo"

const projectBody = document.querySelector(".project-body")
const projectName = document.querySelector(".project-name")
const editProjectModal = document.querySelector(".edit-project-form-modal")
const editProjectForm = document.querySelector(".edit-project-form")
const editProjectBtn = document.querySelector(".edit-project")
const delProjectBtn = document.querySelector(".delete-project")
const newTodoModal = document.querySelector(".new-todo-form-modal")
const newProjectForm = document.querySelector(".new-todo-form")
const newTodoBtn = document.querySelector(".new-todo")

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

// Open edit project form
const canTriggerEditProjectForm = (() =>{
  editProjectBtn.onclick = () => {
    editProjectModal.classList.toggle("hidden")
  }
})()

// Edit project
const canEditProject = (() => {
  editProjectForm.addEventListener("submit", editThisProject)
})()

// Delete project
const canDeleteProject = (() => {
  delProjectBtn.addEventListener("click", deleteThisProject)
})()

// Open new todo form
const canTriggerNewTodoForm = (() => {
  newTodoBtn.onclick = () => {
    newTodoModal.classList.toggle("hidden")
  }
})()

// Create new todo
const canCreateTodo = (() => {
  newProjectForm.addEventListener("submit",(e) => {
    let newTodo = createTodo(e)
    let oldProject = getCurrentProject()
    let newProject = getCurrentProject()
    newProject.todo.push(newTodo)
    syncProject(newProject)
    updateProjectStorage(newProject, oldProject)
  })
})()
