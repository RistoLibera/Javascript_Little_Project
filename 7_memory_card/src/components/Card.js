import React from 'react'

const Card = (props) => {
  const url = props.image.url

  return (
    <div className="cards">
      <img alt="a card" src={url}></img>
      <p>{props.image.name}</p>
    </div>
  )
}

export {
  Card
}