let about = () => {
  // Change background
  let body = document.querySelector("body")
  let content = document.getElementById('content')
  content.classList.add('about')

  // Activate button
  let aboutBtn = document.getElementById('about')
  aboutBtn.classList.add('active')

  // Create about content
  let container = document.createElement('div')
  container.classList.add('container')
  let headline = document.createElement('h1')
  headline.innerHTML = 'The Story of Tobago & Tripoli in San Diego'
  let tagline = document.createElement('p')
  tagline.innerHTML = 'Since 2020, Tobago & Tripoli has been nowhere near the forefront of San Diego\' culinary scene. We invite you to experience our one-of-a-kind \'deficient delights\' which bridge the gap between the epicurean and the impecunius.'
  tagline.classList.add('text')

  container.appendChild(headline)
  container.appendChild(tagline)

  // Insert container before footer
  let footer = document.querySelector('footer')
  body.insertBefore(container, footer)
}

export default about