export default function Box({ value, setBoard, index, board, setTurn, turn}) {
  const handleClick = () => {
    let newValue;
    if (turn === 'player1') {
      newValue = 'X';
      setTurn('player2');
    } else {
      newValue = 'O';
      setTurn('player1');
    }

    console.log(index)
    const newBoard = [...board]
    newBoard[index] = newValue;
    setBoard(newBoard)
  }
  return (
    <div className='Box'>
      <button type='button' onClick={handleClick} disabled={value} className='box-value'>{value}</button>
    </div>
  )
}