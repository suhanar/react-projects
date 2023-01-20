import React,{useState} from 'react'

function AddEmployee({addItem,input,setInput,Designation,setDesignation,isEdit,setIsEdit}) {
  
  

  const handleChange = (e)=>{
     setInput(e.target.value)
  }
  const handleChange1 = (e)=>{
    setDesignation(e.target.value)
  }
  return (
    <div className='form-div'>
       <input placeholder="Add name of Employee" type="text" value={input} onChange={handleChange}/>
       <input placeholder="Designation" type="text" value={Designation} onChange={handleChange1}/>
       <button onClick={()=>addItem(input,Designation)} className={isEdit?'green':'blue'}>{isEdit ? "Edit Employee" : "Add Employee"}</button>
    </div>
  )
}

export default AddEmployee