import React,{useState} from 'react';
import EmployeeList from './EmployeeList';
import { Outlet, Link } from "react-router-dom";
import Success from './Success';

function AddEmployee({addItem,input,setInput,Designation,setDesignation,isEdit,setIsEdit,img,setImg,show,setShow,email,ph,setEmail,setPh}) {
  
  

  const handleChange = (e)=>{
     setInput(e.target.value)
  }
  const handleChange1 = (e)=>{
    setDesignation(e.target.value)
  }
  const handleChangeEmail = (e)=>{
    setEmail(e.target.value)
  }
  const handleChangePh = (e)=>{
    setPh(e.target.value)
  }
  
  const handleChange2 = (e)=>{
    // if(e.target.files){
    //   setImg(e.target.files[0])
    //   console.log(e.target.files[0].name)
    // }
    // console.log(img);

    const fr = new FileReader();
    fr.readAsDataURL(e.target.files[0]);
    const fileName = e.target.files[0].name;
    //console.log(e.target.files[0].name)
    fr.addEventListener('load',()=>{    //async
      const url = fr.result;
      console.log(fr.result);
      //console.log(url);
      // const img = new Image();
      // img.src=url;
      // document.body.appendChild(img);
      setImg(url);
    })
 
   
  }

  
 
  const handleSubmit = (e)=>{
    e.preventDefault();
    addItem(input,Designation,img,email,ph);
    setIsEdit(false);
    setShow(!show)
    
    
    
   
    //console.log(img);
    // if(isEdit){
    //   alert('Edited');
    // }
    // else{
    //   alert('Added')
    // }
    //window.location.reload();
   
    
  }
  return (
    <div className='form-div' id="form-div">
      <form onSubmit={handleSubmit} className='form-div2'>
        <label className="custom-file-upload">
        <input type='file' id="file" onChange={handleChange2} accept ="image/*"/>
        </label>
   <input className='input-div' placeholder="Add name of Employee" type="text" value={input} onChange={handleChange} required/>
   <input className='input-div' placeholder="Designation" type="text" value={Designation} onChange={handleChange1} required/>

   <input className='input-div' placeholder="Email" type="text" value={email} onChange={handleChangeEmail} required/>
   <input className='input-div' placeholder="Phone Number" type="text" value={ph} onChange={handleChangePh} required/>


   
  
   <button  className={isEdit?'green':'blue'}>{!isEdit ? "Add Employee" : "Edit Employee"}</button>
   
  
   {/* <button onClick={()=>addItem(input,Designation)} className={isEdit?'green':'blue'}>{!isEdit ? "Add Employee" : "Edit Employee"}</button> */}
      </form>

      <div className='home-add-btn1'>
      <Link to='/'>
          <button className='home-edit home-change'>← Go Home</button>
          </Link>
       

         <Link to='/list'>
          <button className='home-edit home-change'>See List →</button>
          </Link>
        </div>


      {/* <EmployeeList item={item} deleteItem={deleteItem} editItem={editItem}/>  */}
      {
        show==true&&<Success show={show} setShow={setShow} />
      }
      
       
    </div>
  )
}

export default AddEmployee