import React,{useState} from 'react'

function Todo({addItem,list,input,setInput}) {
    

    const handleChange = (e)=>{
       setInput(e.target.value)
    }
  return (
    <div>
        <input onChange={handleChange} value={input}/>
        <button onClick={()=>addItem(input)}>Submit</button>
    </div>
  )
}

export default Todo