import React from 'react'

function Score({score}) {
  return (
    <div className='score'>
        <h4>Scores</h4>
        {
            score.map((el,idx)=> (
                <div key={idx} className="score-details">
                <div className='date'>{el.date}</div>
                <div>{el.score}</div>
                </div>
            ))
        }
    </div>
  )
}

export default Score