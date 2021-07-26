// Project factory
const Project = (name) => {
  let todo = []
  return {
    name,
    todo
  }
}

// Store project
const storeProject = (newProject) => {
  let allProjects = getAllProjects()
  allProjects.push(newProject)
  localStorage.setItem("myProject", JSON.stringify(allProjects))
}

const getAllProjects = () => {
  if(localStorage.length == 0) {
    return []
  } else {
    let allProjects = JSON.parse(localStorage.getItem("myProject"))
    return allProjects
  }
}

export {
  Project,
  storeProject
}




