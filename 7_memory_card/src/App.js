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

  const arrangeCards = () => {
    let arrangement = gameCards.map((card, index) => {
      return(
        <div className="cards" key={index}>
          <Card card={card}></Card>
        </div>
      )
    });
    return arrangement;
  }

  const shuffleCards = (cards) => {
    for(let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    return cards;
  };


  useEffect(() => {
  
  }, [score])


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
