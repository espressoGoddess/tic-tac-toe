import { useState } from "react";
import Box from "./Box";

export default function GameBoard({ player1, player2, onGameEnd, disabled = false }) {

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
    const winnerToken = checkForWin(newBoard);
    if (winnerToken) {
      onGameEnd(winnerToken);
    } else {
      nextTurn();
    }
  }

  const boxes = board?.map((item, index) => {
    return (
      <Box
        value={item}
        key={index}
        disabled={disabled}
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

function checkForWin(gameboard) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
  ];

  for (let i = 0; i < winningCombos.length; i ++) {
    const [x, y, z] = winningCombos[i];
    if (gameboard[x] && gameboard[x] === gameboard[y] && gameboard[x] === gameboard[z]) {
      return gameboard[x];
    }
  }
  if (gameboard.every(item => item)) {
    return 'Draw';
  }
}