// Project factory
const Project = (name) => {
  let todo = [];
  return {
    name,
    todo
  };
};

// Store new project
const storeProject = (newProject) => {
  let allProjects = getAllProjects();
  allProjects.push(newProject);
  localStorage.setItem("myProject", JSON.stringify(allProjects));
};

// Get stored projects
const getAllProjects = () => {
  let projectLS = localStorage.getItem("myProject");
  if(projectLS) {
    let allProjects = JSON.parse(projectLS);
    return allProjects;
  } else {
    return [];
  }
};

// Find a project
const findProject = (projectName) => {
  let allProjects = getAllProjects();
  let thatProject = allProjects.find(storedProject => storedProject.name == projectName);
  return thatProject;
};

// Update project storage
const updateProjectStorage = (newProject, oldProject) => {
  let projectStorage = getAllProjects();
  let tempStorage;

  projectStorage.map((project, index) => {
    if (project.name == oldProject.name && newProject === oldProject) {
      // Delete
      projectStorage.splice(index, 1);
      tempStorage = JSON.stringify(projectStorage);
      localStorage.setItem("myProject", tempStorage);
    } else if (project.name == oldProject.name) {
      // Add
      projectStorage.splice(index, 1, newProject);
      tempStorage = JSON.stringify(projectStorage);
      localStorage.setItem("myProject", tempStorage);
    } 
  });
};

// Synchronize current project
const syncProject = (project) => {
  localStorage.setItem("currentProject",JSON.stringify(project));
};

// Get current project
const getCurrentProject = () => {
  let currentProjectLS = localStorage.getItem("currentProject");
  if (currentProjectLS) {
    let currentProject = JSON.parse(currentProjectLS);
    return currentProject;
  } else {
    return null;
  }
};

// Create new project
const createNewProject = (e) => {
  let projectName = e.target.elements.name.value;
  let newProject = Project(projectName);
  storeProject(newProject);  
  syncProject(newProject);
};

// Edit project name
const editThisProject = (e) => {
  let oldProject = getCurrentProject();
  let newProject = getCurrentProject();
  let formValue = e.target.elements;
  newProject.name = formValue.name.value;
  syncProject(newProject);
  updateProjectStorage(newProject, oldProject);
};

// Autofill old project name
const fillProjectName = (form) => {
  let oldProject = getCurrentProject();
  let oldname = oldProject.name;
  form.name.value = oldname;
};

// Delete project
const deleteThisProject = () => {
  let confirmation = confirm("Delete this project?");
  if (!confirmation) return;

  let oldProject = getCurrentProject();
  let newProject = getCurrentProject();
  
  // Update two database
  localStorage.removeItem("currentProject");
  updateProjectStorage(newProject, oldProject);
  location.reload();
};

export {
  Project,
  storeProject,
  getAllProjects,
  findProject,
  syncProject,
  getCurrentProject,
  createNewProject,
  editThisProject,
  fillProjectName,
  deleteThisProject,
  updateProjectStorage
};
