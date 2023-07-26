import GameBoard from "./GameBoard";
import ScoreCard from "./ScoreCard";
import { useState } from "react";

function App() {
  const [player1, setPlayer1] = useState({name: 'Amber', score: 0, token: 'X'});
  const [player2, setPlayer2] = useState({name: 'Nathan', score: 0, token: 'O'});

  return (
    <main className="App">
      <ScoreCard player={player1}/>
      <GameBoard player1={player1} player2={player2} />
      <ScoreCard player={player2}/>
    </main>
  );
}

export default App;
