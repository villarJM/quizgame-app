import { useState } from "react"
import DropdownAnswer from "./components/DropdownAnswer";
import { Link } from "react-router-dom";
import './App.css'

function GameHome() {
  

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-12">
          <div className='title'>
            <h2 className="coltitle">QuizGame</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Link to='/Captura'>
            <span className="coltitle">Captura</span>
          </Link>
        </div>
        <div className="col-md-6">
          <Link to='/Game'>
            <span className="coltitle">Game</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GameHome