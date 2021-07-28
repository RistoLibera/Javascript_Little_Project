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
      <td><button class='edit-todo' data-index='${index}'><span class="material-icons">description</span></button></td>
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
  let todoIndex = e.target.closest("button").dataset.index
  let alteredTodo = newProject.todo[todoIndex]
  
  alteredTodo.checked = !(alteredTodo.checked)
  syncProject(newProject)
  updateProjectStorage(newProject, oldProject)
  // Update interface
  location.reload()
}

// Autofill old todo content
const fillTodocontent = (form, todoIndex) => {
  let oldProject = getCurrentProject()
  let oldTodo = oldProject.todo[todoIndex]
  let oldTitle = oldTodo.title
  let oldDue = oldTodo.due
  let oldPriority = oldTodo.priority

  form.title.value = oldTitle
  form.due.value = oldDue
  form.priority.value = oldPriority
}

// Edit todo content
const editTodo = (e, todoIndex) => {
  let oldProject = getCurrentProject()
  let newProject = getCurrentProject()
  let alteredTodo = newProject.todo[todoIndex]
  let formValue = e.target.elements

  alteredTodo.title = formValue.title.value
  alteredTodo.due = formValue.due.value
  alteredTodo.priority = formValue.priority.value

  syncProject(newProject)
  updateProjectStorage(newProject, oldProject)
}

// Delete todo
const deleteTodo = (e) => {
  let confirmation = confirm("Delete this todo?")
  if (!confirmation) return

  let oldProject = getCurrentProject()
  let newProject = getCurrentProject()
  let todoIndex = e.target.closest("button").dataset.index
  let alteredTodo = newProject.todo

  alteredTodo.splice(todoIndex, 1)
  // Update two database
  syncProject(newProject)
  updateProjectStorage(newProject, oldProject)
  location.reload()
}

export {
  Todo,
  createTodo,
  showTodos,
  checkTodo,
  fillTodocontent,
  editTodo,
  deleteTodo
}