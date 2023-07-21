import { useState } from "react";
import Box from "./Box";

export default function GameBoard({ turn, setTurn, player1, player2}) {

  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);

  const boxes = board?.map((item, index) => {
    return (
      <Box
        value={item}
        key={index}
        index={index}
        turn={turn}
        setTurn={setTurn}
        board={board}
        setBoard={setBoard}
        player1={player1}
        player2={player2}
      />
    );
  })

  return (
    <section>
      <h1>{turn.name}'s turn</h1>
      <div className='GameBoard'>
        {boxes}
      </div>
    </section>
  );
}