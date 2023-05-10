import React from 'react'

const DropdownAnswer = ({answer1, answer2, answer3, AnswerChecked, handleEditQuestionButton, handleDeleteQuetionButton, handleCheckRadioAnswerButton} ) => {
  
  const RadioAnswer = () => {
    document.querySelectorAll(`input[name="answer"]`).forEach(element => {
      if(element.value === AnswerChecked) {
          element.checked = true;
      }
    });
  }
  return (
    <div className="dropdown">
        <a onClick={RadioAnswer} className="btn btn-warning dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Answers
        </a>
        <ul className="dropdown-menu">
          <li>
            <div className="input-group">
              <div className="input-group-text">
                <input className="form-check-input mt-0" type="radio" value={answer1} name="answer" aria-label="Radio button for following text input"/>
              </div>
                <input type="text" className="form-control" aria-label="Text input with radio button" value={answer1}/>
            </div>
          </li>
          <li>
            <div className="input-group">
              <div className="input-group-text">
                <input className="form-check-input mt-0" type="radio" value={answer2} name="answer" aria-label="Radio button for following text input"/>
              </div>
                <input type="text" className="form-control" aria-label="Text input with radio button" value={answer2}/>
            </div>
          </li>
          <li>
            <div className="input-group">
              <div className="input-group-text">
                <input className="form-check-input mt-0" type="radio" value={answer3} name="answer" aria-label="Radio button for following text input"/>
              </div>
                <input type="text" className="form-control" aria-label="Text input with radio button" value={answer3}/>
            </div>
            <div className="input-group">
            <button onClick={handleCheckRadioAnswerButton} type="button" className="btn btn-outline-primary btn-lg text-center">
              <i className="bi bi-check"></i>
            </button>
            </div>
          </li>
        </ul>
        <button onClick={handleEditQuestionButton} type="button" className="btn btn-outline-primary btn-lg text-center">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button onClick={handleDeleteQuetionButton} type="button" className="btn btn-outline-danger btn-lg text-center">
          <i className="bi bi-trash3-fill"></i>
        </button>
      </div>
  )
}

export default DropdownAnswer