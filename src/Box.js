export default function Box({ value, onClick, disabled }) {
  
  return (
    <div className='Box'>
      <button type='button' onClick={onClick} disabled={value || disabled} className='box-value'>{value}</button>
    </div>
  )
}

