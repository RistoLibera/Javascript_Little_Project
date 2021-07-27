// Todo factory
const Todo = (title, due, priority, checked) => {

  return {
    title,
    due,
    priority,
    checked
  }
}

// Get todo content
const getTodoContent = (project) => {
  let tableRows = []
  let array = project.todo

  array.forEach((todo) => {
    let rowHtml = `
    <tr class='${todo.checked ? 'complete' : todo.priority}'>
      <td>${todo.title}</td>
      <td>${todo.due}</td>
      <td>${todo.priority}</td>
      <td>
        <button class='progress'>
          ${
            todo.checked
              ? "<span class='material-icons'>task_alt</span>"
              : "<span class='material-icons'>remove_circle_outline</span>"
          }
        </button>
      </td>
      <td><button class='edit-todo'><span class="material-icons">zoom_in</span></button></td>
      <td><button class='delete-todo'><span class="material-icons">delete_forever</span></button></td>
    </tr>`

  tableRows.push(rowHtml)
  })

  return tableRows
}

export {
  Todo,
  getTodoContent
}