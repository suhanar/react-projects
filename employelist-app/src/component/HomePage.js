import React from 'react';
import { Outlet, Link } from "react-router-dom";

function HomePage({item}) {
  return (
    <div className='homepage'>
      
        <div className='home-input'>
            <input placeholder='Search...' type="text"/>
            <button className='home-btn'>Search</button>
        </div>
       
        <div className='home-add-btn'>
        <Link to='/emp'>
          <button className='home-add home-change'>Add Employee</button>
          </Link>

          <Link to='/list'>
          <button className='home-edit home-change'>Edit Employee</button>
          </Link>
        </div>
        
        <div className='home-grid'>
         
          {
            
            item.map((el)=> 
            el !==undefined?
            <div className='home-details'>
              <div className='home-img'>
                    <img src={el.img1} />
              </div>
               <div className='home-detail'>
                    <h4>{el.name}</h4>
                    <h6>{el.designation}</h6>
               </div>
               
            </div>:0
            )
          }
            </div>
    </div>
  )
}

export default HomePage