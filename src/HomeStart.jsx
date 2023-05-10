import { useNavigate } from 'react-router-dom'
import './HomeStart.css'

function HomeStart({setState}) {
  const Start = () => {
    setState(true);
  }
return (
  <div className='Start'>
    <h1 className='start' onClick={Start}>Start Game</h1>
  </div>
)
}

export default HomeStart