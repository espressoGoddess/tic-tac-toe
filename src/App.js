import GameBoard from "./GameBoard";
import ScoreCard from "./ScoreCard";
import { useState, useEffect } from "react";

function App() {
  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});
  const [turn, setTurn] = useState({});
  const [count, setCount] = useState(null);

  useEffect(() => {
    setPlayer1({name: 'Amber', score: 0, token: 'X'});
    setPlayer2({name: 'Nathan', score: 0, token: 'O'});
    setCount(0);
  }, []);

  useEffect(() => {
    count % 2 ? setTurn(player2) : setTurn(player1);
  }, [count])

  return (
    <main className="App">
      <ScoreCard player={player1}/>
      <GameBoard turn={turn} count={count} setCount={setCount}/>
      <ScoreCard player={player2}/>
    </main>
  );
}

export default App;
