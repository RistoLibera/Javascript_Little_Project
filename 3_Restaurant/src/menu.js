let menu = () => {
  let content = document.getElementById('content')
  content.classList.add('menu')

  let menuBtn = document.getElementById('menu')
  menuBtn.classList.add('active')

  let container = document.createElement('div')
  container.classList.add('container')

  let headline = document.createElement('h1')
  headline.innerHTML = 'Seasonal Menu'
  container.appendChild(headline)

  let menu = document.createElement('ul')
  let dishes = ['duo of pogos, marble cheeze whiz, honey ham rosette, spongebob zoodles   20', 'raspberry poptart parfait, vanilla snackpack, grape crush scented gel, mike n ikes, cry babies, fruity mentos   17', 'hungry man dinner   24', 'beef n bean burrito, wishbone caesar crema, lemon lime gatorade spheres   15', 'dunkin munchkin, oreo soil, shamrock fluid gel, moosetracks quenelle   21']

  for (let i = 0; i < dishes.length; i++) {
    let item = document.createElement('li')
    item.innerHTML = dishes[i]
    menu.appendChild(item)
  }

  container.appendChild(menu)

  content.appendChild(container)
}

export default menu