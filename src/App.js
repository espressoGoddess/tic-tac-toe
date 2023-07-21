import GameBoard from "./GameBoard";
import ScoreCard from "./ScoreCard";
import { useState, useEffect } from "react";

function App() {
  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});
  const [turn, setTurn] = useState('player1');
  useEffect(() => {
    setPlayer1({name: 'Amber', score: 0, isTurn: true, token: 'X'});
    setPlayer2({name: 'Nathan', score: 0, isTurn: false, token: 'O'});
  }, []);

  return (
    <main className="App">
      <ScoreCard player={player1}/>
      <GameBoard turn={turn} setTurn={setTurn}/>
      <ScoreCard player={player2}/>
    </main>
  );
}

export default App;
