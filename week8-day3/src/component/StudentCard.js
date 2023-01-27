import React from 'react';
import Score from './Score';

function StudentCard({user}) {
  return (
    <div className='student-card'>

        {
            user.map((el,idx)=> (
                <div key={idx} className="info">
                <h4 className='name'>{el.name}</h4>
                <p>{el.bio}</p>
                <div className='score-card'>
                    <Score score={el.scores}/>
                </div>
                </div>
            ))

        }
         
    </div>
  )
}

export default StudentCard