// Project factory
const Project = (name) => {
  let todo = []
  return {
    name,
    todo
  }
}

// Store new project
const storeProject = (newProject) => {
  let allProjects = getAllProjects()
  allProjects.push(newProject)
  localStorage.setItem("myProject", JSON.stringify(allProjects))
}

// Get stored projects
const getAllProjects = () => {
  let projectLS = localStorage.getItem("myProject")
  if(projectLS) {
    let allProjects = JSON.parse(projectLS)
    return allProjects
  } else {
    return []
  }
}

// Find a project
const findProject = (projectname) => {
  let allProjects = getAllProjects()
  let thatProject = allProjects.find( storedProject => storedProject.name == projectname)
  return thatProject
}

// Synchronize current project
const syncProject = (project) => {
  localStorage.setItem("currentProject",JSON.stringify(project))
}

// Get current project
const getCurrentProject = () => {
  let currentProjectLS = localStorage.getItem("currentProject")
  if (currentProjectLS) {
    let currentProject = JSON.parse(currentProjectLS)
    return currentProject
  } else {
    return null
  }
}

// Create new project
const createNewProject = (e) => {
  let projectName = e.target.elements.name.value
  let newProject = Project(projectName)
  storeProject(newProject)  
  syncProject(newProject)
}

// Edit project name
// const editThisProject = ()

// Update project currentProject.update this.name


export {
  Project,
  storeProject,
  getAllProjects,
  findProject,
  syncProject,
  getCurrentProject,
  createNewProject
}

