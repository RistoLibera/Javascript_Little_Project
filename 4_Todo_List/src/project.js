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
const updateProjectStorage = (newProject, oldProject) => {
  let projectStorage = JSON.parse(localStorage.getItem("myProject"))
  let tempStorage

  projectStorage.map((project, index) => {
    if (project.name == oldProject.name) {
      projectStorage.splice(index, 1, newProject)
      tempStorage = JSON.stringify(projectStorage)
      localStorage.setItem("myProject", tempStorage)
    }
  })
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
  let oldProject = getCurrentProject()
  let newProject = getCurrentProject()
  newProject.name = e.target.elements.name.value
  syncProject(newProject)
  updateProjectStorage(newProject, oldProject)
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

