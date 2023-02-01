import React from 'react';
import {Link} from 'react-router-dom';

function StarShipCard({ship}) {
  return (
 <Link to='/starship' >
        <div className='card-div'>
        <h4>
            {
                ship.map((el)=> (
                    <div className='ship-card'>{el.name}</div>
                ))
            }
       
        </h4>
        </div>
      
 </Link>
   
  )
}

export default StarShipCard