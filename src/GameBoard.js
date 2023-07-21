import { useState } from "react";
import Box from "./Box";

export default function GameBoard({ turn, count, setCount }) {

  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);

  const boxes = board?.map((item, index) => {
    return (
      <Box
        value={item}
        key={index}
        index={index}
        turn={turn}
        board={board}
        setBoard={setBoard}
        count={count}
        setCount={setCount}
      />
    );
  })

  const resetBoard = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
  }

  return (
    <section>
      <h1>{turn.name}'s turn</h1>
      <div className='GameBoard'>
        {boxes}
      </div>
      <button onClick={resetBoard}>Reset Board</button>
    </section>
  );
}