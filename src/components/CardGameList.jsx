function CardGameList({number, question, answer1, answer2, answer3}) {
  
  return (
    <div className="card">
      <h5 className="card-header">Question #{number}</h5>
      <div className="card-body">
        <p className="card-text">{question}</p>

        
        <div className="check text-center">
          <div className="form-check-inline">
            <input className="form-check-input is-valid" type="radio" name={number} id={number} value={answer1} required=""/>
            <label id="1" className="form-check-label" htmlFor={number}>
              {answer1}
            </label>
            <div id="invalidCheck3Feedback" class="invalid-feedback">
            You must agree before submitting.
            </div>
          </div>
          <div className="form-check-inline">
            <input className="form-check-input" type="radio" name={number} id={number} value={answer2}/>
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              {answer2}
            </label>
          </div>
          <div className="form-check-inline">
            <input className="form-check-input" type="radio" name={number} id={number} value={answer3}/>
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              {answer3}
            </label>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CardGameList