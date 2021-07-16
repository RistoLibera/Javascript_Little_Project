// Variables to call Elements
const modal = document.querySelector(".modal"),
      openModalTrigger = document.querySelector(".trigger"),
      closeModalTrigger = document.querySelector(".close"),
      form = document.getElementById("book-input"),
      libraryDivContainer = document.getElementById("render-library")

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
// Form class takes central area, modal class taks the other
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("open")
  }
})

// Get inputs to Array
form.addEventListener("submit", (event) => {
  event.preventDefault()
  let formValue = event.target.elements

  newBook = new Book(
    formValue.title.value,
    formValue.author.value,
    formValue.pages.value,
    formValue.read.checked
  )

  myLibrary.push(newBook)

  // Library functions
  renderBook(newBook)

  form.reset()
  modal.classList.remove("open")
  //LocalStorage only supports strings. Use JSON.stringify() and JSON.parse().
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary))
})

const renderBook = (book) => {
  // Add books to the library screen
  let removeBookBtn = document.createElement("button")
  removeBookBtn.innerText = "Remove"
  removeBookBtn.classList.add("delete-book-btn")
  removeBookBtn.setAttribute("type", "button")

  let btnNode = document.createElement("button")

  let bookContainerDiv = document.createElement("div")
  bookContainerDiv.classList.add("book-container")


  libraryDivContainer.appendChild(bookContainerDiv)

  for (const [key, value] of Object.entries(book)) {
    let pNode = document.createElement("p")

    if (key === "pages") {
      pNode.innerHTML = `Pages: ` + `<span class="number-style">` + value + `</span>`
      pNode.classList.add("book-pages")
    } else if (key === "read") {

      if(value) {
        btnNode.innerHTML = "Read: Yes"
        btnNode.style.backgroundColor = "limegreen"
      } else {
        btnNode.innerHTML = "Read: No"
        btnNode.style.backgroundColor = "red"
      }
    } else if (key === "author") {
      pNode.innerHTML = `by ${value}`
      pNode.classList.add("book-author")
    } else {
      pNode.innerHTML = value
      pNode.classList.add("book-title")
    }

    pNode.classList.add("book-detail")
    btnNode.classList.add("read-btn")
    btnNode.setAttribute("type", "button")
    bookContainerDiv.append(pNode)
    bookContainerDiv.append(btnNode)
  }

  bookContainerDiv.appendChild(removeBookBtn)

  // Get specific book title
  function getBookTitle(event) {
    bookTitleParagraph = event.target.parentElement.getElementsByClassName("book-title")
    bookTitle = bookTitleParagraph[0].innerHTML
    return bookTitle
  } 

  // Update LocalStorage
  function updateLocalStorage(bookTitle, option) {
    let localDB = JSON.parse(localStorage.getItem("myLibrary"))
    localDB.map((book, index) => {
      if(book["title"] === bookTitle && option == 1){
        myLibrary.splice(index, 1)
        localDB.splice(index ,1)
        tempLibrary = JSON.stringify(localDB)
        localStorage.setItem("myLibrary", tempLibrary)
      }  else if(book["title"] === bookTitle){
        myLibrary[index]["read"] = !(myLibrary[index]["read"])
        localDB[index]["read"] = !(localDB[index]["read"])
        tempLibrary = JSON.stringify(localDB)
        localStorage.setItem("myLibrary", tempLibrary)
      }
    })
  }

  // Toggle read status
  btnNode.addEventListener("click", (e) =>{    
    if(btnNode.innerHTML.split(" ")[1] === "Yes") {
      btnNode.style.backgroundColor = "red"
      btnNode.innerHTML = "Read: No"
    } else {
      btnNode.style.backgroundColor = "limegreen"
      btnNode.innerHTML = "Read: Yes"
    }

    bookStatus = e.target.innerHTML
    changedBookTitle = getBookTitle(e)
    updateLocalStorage(changedBookTitle, 2)
  })

  //Remove book record
  removeBookBtn.addEventListener("click", (e) =>{
    e.target.parentElement.remove()
    removedBookTitle = getBookTitle(e)
    updateLocalStorage(removedBookTitle, 1)
  })
}

// Display myLibrary even when refreshing
function renderLibraryStorage() {
  if(localStorage.myLibrary) {
    let getBooks = JSON.parse(localStorage.getItem("myLibrary")) 
    getBooks.map((book) => {
      // Refresh web database
      myLibrary.push(book)
      renderBook(book)
    })
  }
}

// Running when refreshing
renderLibraryStorage()


