let footer = () => {
  let footer = document.createElement("footer")
  let footerText = document.createElement("p")
  footerText.innerHTML = "NO Copyright © (really?)"

  footer.appendChild(footerText)
  
  return footer
}

export default footer