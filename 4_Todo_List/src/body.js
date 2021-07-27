import {getAllProjects, getCurrentProject, editThisProject} from "./project"

const projectBody = document.querySelector(".project-body")
const projectName = document.querySelector(".project-name")
const editProjectModal = document.querySelector(".edit-project-form-modal")
const editProjectForm = document.querySelector(".edit-project-form")
const editProjectBtn = document.querySelector(".edit-project")
const delProjectBtn = document.querySelector(".delete-project")

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
const canTriggerProjectForm = (() =>{
  editProjectBtn.onclick = () => {
    editProjectModal.classList.toggle("hidden")
  }
})()

// Edit project
const canEditProject = (() => {
  editProjectForm.addEventListener("submit", editThisProject)
})()
// remember to delete two storage