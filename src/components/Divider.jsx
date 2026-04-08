import './Divider.css'

export default function Divider() {
  return (
    <div className='divider'>
      <span className='divider__line' />
      <span className='divider__diamond'>◆</span>
      <span className='divider__line' />
    </div>
  )
}
