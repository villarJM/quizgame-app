import { useState } from "react";
import Swal from 'sweetalert2'
import CardGameList from "./components/CardGameList";
import './App.css'

function Game() {
  const [listQuestions, setListQuestions] = useState(
    JSON.parse(localStorage.getItem("listQuestions")) || []
  );
  
  const RadioCheckedAnswer = () => {
    var correcto = [];
    var incorrecto = [];
    listQuestions.map((i) => (
      document.querySelectorAll(`input[id="${i.number}"]`)
        .forEach(element => {
          if (element.checked && i.AnswerChecked === element.value) {
            correcto.push(element.value);
            console.log(element.value);
          } else if (element.checked && i.AnswerChecked !== element.value)  {
            incorrecto.push(element.value)
            console.log(element.value);
          } else {
            console.log(element);
          }
        })
    ));
    var numberquestion = 0;
    for (const key in listQuestions) {
        const element = listQuestions[key];
        numberquestion++;
        
    }
    Swal.fire({
      title: "Good job!",
      text: `Correct: ${correcto.length}/${numberquestion}`,
      icon: "success",
    });
  }
  return (
    <div className="container text-center">
      <div className='row'>
        <div className='col-md-10'>
            <span className="coltitle">Game</span>
          <div className="btncheck">
            <button onClick={RadioCheckedAnswer} type="submit" className="btn btn-outline-success btn-lg text-center">
              <i className="bi bi-check-all"></i>
            </button>
          </div>
          {
            listQuestions.map((Item) => (
              <CardGameList number={Item.number} question={Item.question} answer1={Item.answer1} answer2={Item.answer2} answer3={Item.answer3} />
            ))
          }
        </div>
    </div>
    </div>
  )
}

export default Game