import { useState } from "react";
import Box from "./Box";

export default function GameBoard() {

  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const boxes = board.map((item, index) => <Box value={item} key={index}/>)

  return (
    <section className='GameBoard'>
      {boxes}
    </section>
  );
}