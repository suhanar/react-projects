import React from 'react'

function TodoList({list,deleteItem}) {
  return (
    <div>
        <ul>{
            list.map((el)=> (
                <li key={el.id}>{el.item}
                <button>Edit</button>
                <button onClick={()=>deleteItem(el.id)}>&times;</button>
                </li>
                
            ))
            
            }</ul>
    </div>
  )
}

export default TodoList