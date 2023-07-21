import GameBoard from "./GameBoard";
import ScoreCard from "./ScoreCard";
import { useState, useEffect } from "react";

function App() {
  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});
  useEffect(() => {
    setPlayer1({name: 'Amber', score: 0});
    setPlayer2({name: 'Nathan', score: 0});
  }, []);

  return (
    <main className="App">
      <ScoreCard player={player1}/>
      <GameBoard />
      <ScoreCard player={player2}/>
    </main>
  );
}

export default App;
