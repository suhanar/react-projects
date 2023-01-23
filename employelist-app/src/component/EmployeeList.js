import React from 'react';
import { Outlet, Link } from "react-router-dom";

function EmployeeList({item,deleteItem,editItem}) {
  return (
    <div className='list-div'>
      <div className='home-add-btn' style={{marginLeft:'100px'}}>
        <Link to='/emp'>
          <button className='home-add home-change'>Add Employee</button>
          </Link>
      </div>
      
        {/* <ul>{
            item.map((el)=> (
                <li key={el.id}>
                    <img   src={el.img1} alt="not found" style={{width:'50px',height:'50px'}}/>
                    <div>{el.name}</div>
                    <div>{el.designation}</div>
                   <Link to='/emp'> <button onClick={()=>editItem(el.id)}>Edit</button></Link>
                    <button onClick={()=>deleteItem(el.id)}>Delete</button>
                </li>
                
                
              
            ))
            
            }
             
            </ul> */}

<table>
  <tr>
    <th>Photo</th>
    <th>Name</th>
    <th>Designation</th>
    <th>Edit Action</th>
    <th>Delete Action</th>
  </tr>
{item.map((el)=>(
  <tr key={el.id}>
    <td><img   src={el.img1} alt="not found" style={{width:'50px',height:'50px'}}/></td>
    <td>{el.name}</td>
    <td>{el.designation}</td>
    <td><Link to='/emp'> <button className='list-edit-btn' onClick={()=>editItem(el.id)}>Edit</button></Link></td>
    <td><button className='list-del-btn'  onClick={()=>deleteItem(el.id)}>Delete</button></td>
  </tr>

)


)}
</table>




            
    </div>
  )
}

export default EmployeeList



