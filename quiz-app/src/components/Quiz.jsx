

const Quiz = ({question, onAnswerClick}) => {
  return (
    <div>
          <h2> {question.questionText} </h2>
          <div className="result">
              {
                  question.answerOptions.map((answer, index) => (
                      <button key={index} onClick={() => onAnswerClick(answer.isCorrect)} >
                          
                          {answer.answerText}
                      </button>

                  ))
              }
          </div>
    </div>
  );
}

export default Quiz