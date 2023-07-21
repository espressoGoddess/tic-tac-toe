import { useState } from "react";
import Box from "./Box";

export default function GameBoard({ turn, setTurn }) {

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
      />
    );
  })

  return (
    <section className='GameBoard'>
      {boxes}
    </section>
  );
}