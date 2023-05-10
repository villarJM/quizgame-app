import './App.css'
import { Route, Routes } from 'react-router-dom'
import GameHome from './GameHome'
import HomeStart from './HomeStart'
import {useState} from 'react'
import Capture from './Capture'
import Game from './Game'

function App() {
  const [state, setState] = useState();
  
  if (!state) {
    console.log(state)
    return <HomeStart setState={setState}/>
  }
  return (
    <>
      {/* <HomeStart/> */}
      <Routes>
        <Route path='/' element={<GameHome/>}/>
        <Route path='/Captura' element={<Capture/>}/>
        <Route path='/Game' element={<Game/>}/>
      </Routes>
    </>
  )
}

export default App
