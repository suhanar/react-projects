import React from 'react';
import { Outlet, Link } from "react-router-dom";

function EmployeeList({item,deleteItem,editItem}) {

  




  return (
    <div className='list-div'>
      <div className='home-add-btn1' style={{marginLeft:'100px'}}>
       

          <Link to='/'>
          <button className='home-add home-change'>Go To Home</button>
          </Link>

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
    <th>Email</th>
    <th>Edit Action</th>
    <th>Delete Action</th>
  </tr>
{item.map((el)=>(
  <tr key={el.id}>
    <td><img   src={el.img1} alt="not found" style={{width:'50px',height:'50px'}}/></td>
    <td>{el.name}</td>
    <td>{el.designation}</td>
    <td>{el.email}</td>
    <td><Link to='/emp'> <i className='fa fa-edit ' onClick={()=>editItem(el.id)} style={{fontSize:'20px',color:'blue',cursor:'pointer'}} /></Link></td>
    <td><i className='fa fa-trash'  onClick={()=>deleteItem(el.id)} style={{fontSize:'20px',color:'red',cursor:'pointer'}} /></td>
  </tr>

)


)}
</table>




            
    </div>
  )
}

export default EmployeeList



