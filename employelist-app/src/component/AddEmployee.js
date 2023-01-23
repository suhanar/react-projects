import React,{useState} from 'react';
import EmployeeList from './EmployeeList';
import { Outlet, Link } from "react-router-dom";

function AddEmployee({addItem,input,setInput,Designation,setDesignation,isEdit,setIsEdit,img,setImg}) {
  
  

  const handleChange = (e)=>{
     setInput(e.target.value)
  }
  const handleChange1 = (e)=>{
    setDesignation(e.target.value)
  }
  const handleChange2 = (e)=>{
    // if(e.target.files){
    //   setImg(e.target.files[0])
    //   console.log(e.target.files[0].name)
    // }
    // console.log(img);

    const fr = new FileReader();
    fr.readAsDataURL(e.target.files[0]);
    fr.addEventListener('load',()=>{    //async
      const url = fr.result;
      //console.log(url);
      // const img = new Image();
      // img.src=url;
      // document.body.appendChild(img);
      setImg(url);
    })
 
   
  }

  
 
  const handleSubmit = (e)=>{
    e.preventDefault();
    addItem(input,Designation,img);
    setIsEdit(false);
    
    // if(isEdit){
    //   alert('Edited');
    // }
    // else{
    //   alert('Added')
    // }
    //window.location.reload();
   
    
  }
  return (
    <div className='form-div'>
      <form onSubmit={handleSubmit} className='form-div2'>
        <input type='file'  onChange={handleChange2} accept ="image/*"/>
   <input placeholder="Add name of Employee" type="text" value={input} onChange={handleChange} required/>
   <input placeholder="Designation" type="text" value={Designation} onChange={handleChange1} required/>
  
   <button className={isEdit?'green':'blue'}>{!isEdit ? "Add Employee" : "Edit Employee"}</button>
   
  
   {/* <button onClick={()=>addItem(input,Designation)} className={isEdit?'green':'blue'}>{!isEdit ? "Add Employee" : "Edit Employee"}</button> */}
      </form>

      <div className='home-add-btn'>
       

         <Link to='/list'>
          <button className='home-edit home-change' style={{marginTop:'20px',backgroundColor:'black',marginLeft:'70px'}}>Edit Employee</button>
          </Link>
        </div>

      {/* <EmployeeList item={item} deleteItem={deleteItem} editItem={editItem}/>  */}
       
    </div>
  )
}

export default AddEmployee