import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';
import Donald from './images/Donald.png';
import Goofy from './images/Goofy.png';
import Kairi from './images/Kairi.png';
import Riku from './images/Riku.png';
import Roxas from './images/Roxas.png';
import Sora from './images/Sora.png';
import Ventus from './images/Ventus.png';
import Xehanort from './images/Xehanort.png';
import Xemnas from './images/Xemnas.png';
import Xion from './images/Xion.png';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const gameCards = [
    {url: Donald, name: 'Donald' },
    {url: Goofy, name: 'Goofy' },
    {url: Kairi, name: 'Kairi' },
    {url: Riku, name: 'Riku' },
    {url: Roxas, name: 'Roxas' },
    {url: Sora, name: 'Sora' },
    {url: Ventus, name: 'Ventus' },
    {url: Xehanort, name: 'Xehanort' },
    {url: Xemnas, name: 'Xemnas' },
    {url: Xion, name: 'Xion' }
  ];

  const shuffleCards = (cards) => {
    for(let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    return cards;
  };

  const clickCard = (card) => {
    if(clickedCards.some(clickedCard => clickedCard.name === card.name )) {
      let message = ["GAME OVER !", "Your score: ", score].join(" ");
      if(bestScore < score) {
        setBestScore(score)
      }
      setClickedCards([]);
      setScore(0);
      alert(message);
    } else {
      setScore(score + 1);
      setClickedCards(clickedCards.concat(card));
    }
  }

  const arrangeCards = () => {
    let arrangement = gameCards.map((card, index) => {
      return(
        <div className="cards" onClick={() => clickCard(card)} key={index}>
          <Card card={card}></Card>
        </div>
      )
    });
    return arrangement;
  }


  useEffect(() => {
    if(score === 10) {
      alert("Awesome!")
      setTimeout(() => { window.location.reload()}, 500);
    }
  }, [score]);


  shuffleCards(gameCards);

  return(
   <div className="game-area">
     <header>
       <Scoreboard score={score} bestScore={bestScore} />
     </header>

     <div id="card-container">
       {arrangeCards()}
     </div>
   </div>
  );
};

export default App;
