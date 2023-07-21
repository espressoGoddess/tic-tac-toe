export default function Box({ value, setBoard, index, board, turn, count, setCount }) {
  const handleClick = () => {
    const newBoard = [...board];
    newBoard[index] = turn.token;
    setBoard(newBoard);
    setCount(count+1);
  }

  return (
    <div className='Box'>
      <button type='button' onClick={handleClick} disabled={value} className='box-value'>{value}</button>
    </div>
  )
}