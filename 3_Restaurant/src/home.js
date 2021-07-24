import nav from "./nav"
import footer from "./footer"

let home = () => {
  // Create content div and append
  let body = document.querySelector("body")
  let content
  if(!document.getElementById("content")) {
    content = document.createElement("div")
    content.setAttribute("id", "content")  
    body.appendChild(content)
  }  else {
    content = document.getElementById("content")
  }

  // Change background
  content.classList.add("home")

  // Get navbar and change activate button
  if(!document.querySelector("nav")) {
    let navbar = nav()
    content.appendChild(navbar)
  }
  let homeBtn = document.getElementById('home')
  homeBtn.classList.add('active')


  // let home = document.getElementById("home")
  // home.classList.add("active")

  let container = document.createElement("div")
  container.classList.add("container")

  let header = document.createElement('header')
  let headline = document.createElement('h1')
  headline.innerHTML = 'Tobago & Tripoli'
  header.appendChild(headline)
  container.appendChild(header)

  let tagline = document.createElement('p')
  tagline.innerHTML = 'Where Bougie Meets Broke'
  header.appendChild(tagline)

  content.appendChild(container)
  // Get footer
  if(!document.querySelector("footer")) {
    let footerbar = footer()
    body.appendChild(footerbar)
  } 
}

export default home