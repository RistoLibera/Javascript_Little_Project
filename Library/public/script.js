// Variables to call Elements
const modal = document.querySelector(".modal"),
      openModalTrigger = document.querySelector(".trigger"),
      closeModalTrigger = document.querySelector(".close"),
      form = document.getElementById("book-input")

// Initialize Library Array and new book variable.
let myLibrary = []
let newBook 
let tempLibrary

// Book Constructor:
function Book(title, author, pages, read = false) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

// Open and close modal
openModalTrigger.addEventListener("click", () => modal.classList.add("open"))
closeModalTrigger.addEventListener("click", () => modal.classList.remove("open"))
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("open")
  }
})