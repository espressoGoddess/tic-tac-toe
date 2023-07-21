export default function Box({ value, setBoard, index, board, setTurn, turn, count, setCount}) {
  const handleClick = () => {
    console.log(turn)
    const newBoard = [...board]
    newBoard[index] = turn.token;
    setBoard(newBoard);
    console.log(count)
    setCount(count+1);
  }

  return (
    <div className='Box'>
      <button type='button' onClick={handleClick} disabled={value} className='box-value'>{value}</button>
    </div>
  )
}