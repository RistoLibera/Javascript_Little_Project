// Table within body
import {checkTodo, fillTodocontent, editTodo} from "./todo"

const checkTodoBtns = document.getElementsByClassName("check-todo")
const editTodoBtns = document.getElementsByClassName("edit-todo")
const editTodoModal = document.querySelector(".edit-todo-form-modal")
const editTodoForm = document.querySelector(".edit-todo-form")
const delTodoBtns = document.getElementsByClassName("delete-todo")

// Check or uncheck one todo
const canCheckTodo = (() => {
  let buttons = Array.from(checkTodoBtns)
  buttons.forEach((button) => {
    button.addEventListener("click", checkTodo)
  })
})()

// Open edit todo form and edit
const canTriggerEditTodoForm = (() =>{
  let buttons = Array.from(editTodoBtns)
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      editTodoModal.classList.toggle("hidden")
      let todoIndex = e.target.closest("button").dataset.index
      fillTodocontent(editTodoForm, todoIndex)
      editTodoForm.addEventListener("submit", (e) => {
        editTodo(e, todoIndex)
      })
    })
  })
})()
