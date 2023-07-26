import { useState } from "react";
import Box from "./Box";

export default function GameBoard({ player1, player2 }) {

  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [turn, setTurn] = useState(player1);

  const nextTurn = () => {
    if (turn === player1) {
      setTurn(player2);
    }
    else {
      setTurn(player1);
    }
  }

  const handleClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = turn.token;
    setBoard(newBoard);
    nextTurn();
  }

  const boxes = board?.map((item, index) => {
    return (
      <Box
        value={item}
        key={index}
        onClick={() => handleClick(index)}
      />
    );
  })

  const resetBoard = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
  }

  return (
    <section>
      <h1>{turn ? turn.name : null}</h1>
      <div className='GameBoard'>
        {boxes}
      </div>
      <button onClick={resetBoard}>Reset Board</button>
    </section>
  );
}