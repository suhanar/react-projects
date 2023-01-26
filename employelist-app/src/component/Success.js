import React from 'react';
import { Outlet, Link } from "react-router-dom";

function Success({show,setShow}) {

    const cancelClick = ()=>{
        document.getElementById('success').style.display = 'none';
        
        setShow(false);
    }
    const seeClick = ()=>{
        setShow(false);
    }
  return (
    <div className='success' id="success">
        <div className='success-div'>
            <h1>Success... </h1>
            <p>If you want to see the list click see list</p>
            <div className='success-btn'>
             <Link to='/list'>
              <button onClick={seeClick}>See List</button>
              </Link>
              <button onClick={cancelClick}>Cancel</button>
            </div>
            
            
        </div> 

    </div>
  )
}

export default Success