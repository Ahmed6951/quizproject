import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
        Obtained Marks:{props.score}<br/>
        Total questions:{props.totalScore}
    </div>
    <button id="next-button" onClick={props.tryAgain}>Another try</button>
    </>
  )
}

export default QuizResult;