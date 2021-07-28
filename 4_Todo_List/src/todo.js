import {getAllProjects, updateProjectStorage, syncProject,
        getCurrentProject} from "./project"

// Todo factory
const Todo = (title, due, priority, checked) => {

  return {
    title,
    due,
    priority,
    checked
  }
}

// Create new todo
const createTodo = (e) => {
  let formData = e.target.elements
  let title = formData.title.value
  let due = formData.due.value
  let priority = formData.priority.value
  let checked = false
  let newTodo = Todo(title, due, priority, checked)

  return newTodo
}

// Get todo content
const getTodoContent = (project) => {
  let tableRows = []
  let array = project.todo

  array.forEach((todo, index) => {
    let rowHtml = `
    <tr class='${todo.checked ? 'complete' : todo.priority}'>
      <td>${todo.title}</td>
      <td>${todo.due}</td>
      <td>${todo.priority}</td>
      <td>
        <button class='check-todo' data-index='${index}'>
          ${
            todo.checked
              ? "<span class='material-icons'>task_alt</span>"
              : "<span class='material-icons'>remove_circle_outline</span>"
          }
        </button>
      </td>
      <td><button class='edit-todo' data-index='${index}'><span class="material-icons">zoom_in</span></button></td>
      <td><button class='delete-todo' data-index='${index}'><span class="material-icons">delete_forever</span></button></td>
    </tr>`

  tableRows.push(rowHtml)
  })

  return tableRows
}

// Show todos
const showTodos = (project) => {
  let todoItems = getTodoContent(project)
  if (todoItems) {
    let listHtml = todoItems.map((tableRow) => tableRow).join("")
    return listHtml
  } else {
    return []
  }
}

// Check or uncheck todo
const checkTodo = (e) => {
  let oldProject = getCurrentProject()
  let newProject = getCurrentProject()
  let tableRow = e.target.closest("tr")
  let todoIndex = e.target.closest("button").dataset.index
  let alteredTodo = newProject.todo[todoIndex]
  
  alteredTodo.checked = !(alteredTodo.checked)
  syncProject(newProject)
  updateProjectStorage(newProject, oldProject)
  // Update interface
  location.reload()
}

export {
  Todo,
  createTodo,
  showTodos,
  checkTodo
}