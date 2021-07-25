const sidebar = document.querySelector(".project")
const toggleBtn = document.querySelector(".toggle-project")
const toggleIcons = document.querySelectorAll(".toggle-icons")

let toggleSideBar = (() => {
  toggleBtn.onclick = () => {
    sidebar.classList.toggle("active")
    toggleIcons.forEach((icon) => icon.classList.toggle("hidden"))
  }
})()

