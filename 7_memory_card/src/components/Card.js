import React from 'react'

const Card = (props) => {
  const cardURL = props.card.url;
  const cardName = props.card.name;
  const key = props.card.key;
  
  return (
    <div>
      <img alt="a card" src={cardURL}></img>
      <p class="card-name">{cardName}</p>
    </div>
  );
}

export default Card