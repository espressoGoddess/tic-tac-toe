export default function Box({ value, setBoard, index, board, setTurn, turn, player1, player2}) {
  const handleClick = () => {
    console.log(turn)
    const newBoard = [...board]
    newBoard[index] = turn.token;
    setBoard(newBoard);
    if (turn.name === 'Amber') {
      setTurn(player2);
    } else {
      setTurn(player1);
    }
  }
  return (
    <div className='Box'>
      <button type='button' onClick={handleClick} disabled={value} className='box-value'>{value}</button>
    </div>
  )
}