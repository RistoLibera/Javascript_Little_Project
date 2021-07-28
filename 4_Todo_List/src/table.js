// Table within body
import {checkTodo} from "./todo"

const checkTodoBtns = document.getElementsByClassName("check-todo")
const editTodoBtns = document.getElementsByClassName("edit-todo")
const delTodoBtns = document.getElementsByClassName("delete-todo")

// Check or uncheck one todo
const canCheckTodo = (() => {
  let buttons = Array.from(checkTodoBtns)
  buttons.forEach((button) => {
    button.addEventListener("click", checkTodo)
  })
})()

