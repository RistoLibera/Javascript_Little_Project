import './reset.css'
import './style.css'
import home from "./home"
import clear from "./clear"
import about from "./about"
import contact from "./contact"
import menu from "./menu"

home()

// Home tab
let homeBtn = document.getElementById("home")
homeBtn.onclick = () => {
  clear()
  home()
}

// About tab
let aboutBtn = document.getElementById("about")
aboutBtn.onclick = () => {
  clear()
  about()
}

// Contact tab
let contactBtn = document.getElementById("contact")
contactBtn.onclick = () => {
  clear()
  contact()
}

// Menu tab
let menuBtn = document.getElementById("menu")
menuBtn.onclick = () => {
  clear()
  menu()
}