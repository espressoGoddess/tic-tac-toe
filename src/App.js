import GameBoard from "./GameBoard";
import ScoreCard from "./ScoreCard";
import { useState, useEffect } from "react";

function App() {
  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});
  const [turn, setTurn] = useState({});

  useEffect(() => {
    setPlayer1({name: 'Amber', score: 0, token: 'X'});
    setPlayer2({name: 'Nathan', score: 0, token: 'O'});
  }, []);

  useEffect(() => {
    setTurn(player1);
  }, [player1]);

  return (
    <main className="App">
      <ScoreCard player={player1}/>
      <GameBoard turn={turn} player1={player1} player2={player2} setTurn={setTurn}/>
      <ScoreCard player={player2}/>
    </main>
  );
}

export default App;
