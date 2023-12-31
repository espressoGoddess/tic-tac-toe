import GameBoard from "./GameBoard";
import ScoreCard from "./ScoreCard";
import { useState } from "react";

function App() {
  const [player1, setPlayer1] = useState({name: 'Amber', score: 0, token: '🏜️'});
  const [player2, setPlayer2] = useState({name: 'Nathan', score: 0, token: '🏍️'});
  const [winner, setWinner] = useState(null);


  const handleGameEnd = winnerToken => {
    if (winnerToken === player1.token) {
      setWinner(`${player1.name} wins`);
      setPlayer1({...player1, score: player1.score + 1})
    } else if (winnerToken === player2.token) {
      setWinner(`${player2.name} wins`);
      setPlayer2({...player2, score: player2.score + 1})
    } else if(winnerToken === 'Draw') {
      setWinner('Draw, no one wins');
    }
  }

  return (
    <main className="App">
      <header>
        <h1>Tic Tac Toe</h1>
      </header>
      <section className="main">
        <ScoreCard player={player1}/>
        <div>
          {winner ? <h2 className="winner">{winner}</h2> : null}
          <GameBoard onGameEnd={handleGameEnd} player1={player1} player2={player2} disabled={winner} onGameReset={setWinner}/>
        </div>
          <ScoreCard player={player2}/>
      </section>
    </main>
  );
}

export default App;
