import React from 'react';
import { Link } from "react-router-dom";

function Dashboard({stock}) {
  return (
    <div className='dash'>
        
        <table>
  <tr>
    <th>Company Name</th>
    <th>Price</th>
    <th>Change</th>
  </tr>
        {

stock.map((el,i)=>(
   
         

  <tr>
  <Link to={`/stock/:${el.symbol}`}>
    <td>{el.name}</td>
    </Link>
    <td>{el.lastPrice}</td>
    <td>{el.change}</td>
  </tr>
  
  



   
    
))

}
</table>
        
    </div>
  )
}

export default Dashboard