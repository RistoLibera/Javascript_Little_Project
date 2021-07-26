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
const getTodoContent = (array) => {
  let tableRows = []

  array.forEach((todo) => {
    let rowHtml = `
    
    `
    tableRows.push(rowHtml)
  })

  return tableRows
}

