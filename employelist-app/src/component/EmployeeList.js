import React from 'react'

function EmployeeList({item,deleteItem,editItem}) {
  return (
    <div>
        <ul>{
            item.map((el)=> (
                <li key={el.id}>
                    <div>{el.name}</div>
                    <div>{el.designation}</div>
                    <button onClick={()=>editItem(el.id)}>Edit</button>
                    <button onClick={()=>deleteItem(el.id)}>Delete</button>
                </li>
                
                
              
            ))
            
            }
             
            </ul>
    </div>
  )
}

export default EmployeeList