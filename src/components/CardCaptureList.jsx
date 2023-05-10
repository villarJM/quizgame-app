import Swal from "sweetalert2";
import {v4 as uuidv4} from 'uuid'
import DropdownAnswer from "./DropdownAnswer";

function CardCaptureList({item, listQuestions, setListQuestions}) {
  const {id, number, question, answer1, answer2, answer3, AnswerChecked} = item;
  
  const handleDeleteQuetionButton = () => {
    const newList = listQuestions.filter((item) => item.id !== id);
    localStorage.setItem("listQuestions", JSON.stringify(newList));
    setListQuestions(newList);
  }
  const handleEditQuestionButton = async () => {
    const {value} = await Swal.fire({
      title: "Edit Question",
      html: ` <input type='number' id='number' name='number' class='swal2-input' placeholder='Number question'  value='${number}'/>
              <input type='text' id='question' name='question' class='swal2-input' placeholder='Question' value='${question}'/>
              <input type='text' id='answer1' name='answer1' class='swal2-input' placeholder='Answer 1' value='${answer1}'/>
              <input type='text' id='answer2' name='answer2' class='swal2-input' placeholder='Answer 2' value='${answer2}'/>
              <input type='text' id='answer3' name='answer3' class='swal2-input' placeholder='Answer 3' value='${answer3}'/>`,
      confirmButtonText: "Save Question",
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
        return {number, question, answer1, answer2, answer3};
      },
      })
      if(!value.number || !value.question || !value.answer1 || !value.answer2  || !value.answer3) return
  
      const newList = listQuestions.map((item) => {
        if (item.id === id) {
          item.number = value.number;
          item.question = value.question;
          item.answer1 = value.answer1;
          item.answer2 = value.answer2;
          item.answer3 = value.answer3;
        }
        return item;
      })
      localStorage.setItem("listQuestions", JSON.stringify(newList));
      setListQuestions(newList);
    
  }
  const handleCheckRadioAnswerButton = () => {
    const AnswerChecked = document.querySelector('input[name="answer"]:checked').value;
    const newList = listQuestions.map((item) => {
      if (item.id === id) {
        item.AnswerChecked = AnswerChecked;
      }
      return item;
    })
    localStorage.setItem("listQuestions", JSON.stringify(newList));
    setListQuestions(newList);
  }
  
  return (
    <div className="card">
    <h5 className="card-header">Question #{number}</h5>
    <div className="card-body">
      <p className="card-text">{question}</p>
      {
        <DropdownAnswer 
          answer1={answer1} 
          answer2={answer2} 
          answer3={answer3}
          AnswerChecked={AnswerChecked} 
          handleEditQuestionButton={handleEditQuestionButton} 
          handleDeleteQuetionButton={handleDeleteQuetionButton}
          handleCheckRadioAnswerButton={handleCheckRadioAnswerButton}
        />
      }
    </div>
  </div>
  )
}

export default CardCaptureList