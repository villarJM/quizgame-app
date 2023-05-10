import React, {useState} from 'react'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid'
import CardCaptureList from "./components/CardCaptureList";
import './App.css'

function Capture() {
  const [listQuestions, setListQuestions] = useState(
    JSON.parse(localStorage.getItem("listQuestions")) || []
  );
  const handleNewQuestionButton = async () => {
    const { value } = await Swal.fire({
      title: "New Question",
      html: ` <input type='number' id='number' name='number' class='swal2-input' placeholder='Number question' />
              <input type='text' id='question' name='question' class='swal2-input' placeholder='Question'/>
              <input type='text' id='answer1' name='answer1' class='swal2-input' placeholder='Answer 1'/>
              <input type='text' id='answer2' name='answer2' class='swal2-input' placeholder='Answer 2'/>
              <input type='text' id='answer3' name='answer3' class='swal2-input' placeholder='Answer 3'/>`,
      confirmButtonText: "Add Question",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: "Dismiss",
      preConfirm: () => {
        const number = Swal.getPopup().querySelector('#number').value;
        const question = Swal.getPopup().querySelector('#question').value;
        const answer1 = Swal.getPopup().querySelector('#answer1').value;
        const answer2 = Swal.getPopup().querySelector('#answer2').value;
        const answer3 = Swal.getPopup().querySelector('#answer3').value;
        if (!number || !question || !answer1 || !answer2 || !answer3) {
          Swal.showValidationMessage('Please enter an item full information');
        }

        return { number, question, answer1, answer2, answer3 };

      },
    })
    if (!value.number || !value.question || !value.answer1 || !value.answer2 || !value.answer3) return

    const newListQuestion = [
      ...listQuestions, { id: uuidv4(), ...value, AnswerChecked: '' }
    ]

    localStorage.setItem("listQuestions", JSON.stringify(newListQuestion));

    setListQuestions(newListQuestion);

  }
  return (
    <div className="container text-center">
      <div className='row'>
        <div className="col-md-10">
          <span className="coltitle">Capture</span>
          <div className="grupobtn">
            <button onClick={handleNewQuestionButton} type="button" className="btn btn-outline-success btn-lg text-center">
              <i className="bi bi-plus-circle-fill"></i>
            </button>
            <button type="button" className="btn btn-outline-danger btn-lg text-center">
              <i className="bi bi-trash3-fill"></i>
            </button>
          </div>
          {
            listQuestions.map((Item) => (
              <CardCaptureList
                key={listQuestions.id}
                item={Item}
                listQuestions={listQuestions}
                setListQuestions={setListQuestions}
              />
            ))
          }
        </div>
    </div>
    </div>
  )
}

export default Capture