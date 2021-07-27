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
const findProject = (projectName) => {
  let allProjects = getAllProjects()
  let thatProject = allProjects.find( storedProject => storedProject.name == projectName)
  return thatProject
}

// Update project storage
const updateProjectStorage = (oldProjectName, newProjectName) => {
  let projectStorage = JSON.parse(localStorage.getItem("myProject"))
  let newStorage = projectStorage.map((project) => {
    if (project.name == oldProjectName) {
      project.name = newProjectName
      syncProject(project)
      return project
    }
  })
  newStorage = JSON.stringify(newStorage)
  localStorage.setItem("myProject", newStorage)
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
const editThisProject = (e) => {
  let oldProjectName = getCurrentProject().name
  let newProjectName = e.target.elements.name.value
  updateProjectStorage(oldProjectName, newProjectName)
}

// Update project currentProject.update this.name


export {
  Project,
  storeProject,
  getAllProjects,
  findProject,
  syncProject,
  getCurrentProject,
  createNewProject,
  editThisProject
}

