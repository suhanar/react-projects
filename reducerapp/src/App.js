import {useState,useReducer} from 'react';

import React from 'react';


const initialState = [{
  id : Date.now(),
  name : '',
  email : ''
}]

const reducer =(state,action)=>{
  switch(action.type){
    case 'add':
      return [...state,action.payload]
    case 'delete':
      return state.filter((val)=>{
        return (val.id !== action.payload.id)
      } )
    default:
      return 'aaa'
  }

}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');

  const contact = {
    id : Date.now(),
    name:name,
    email:email
  }

console.log(state);
  const addContact = (e)=>{
    e.preventDefault();
   
    setName('');
    setEmail('');
    dispatch({type:'add',payload:contact})

  }

  const handleDelete = ()=>{
    
  }
  return (
    <div>

      <form onSubmit={addContact}>
      <input type="text" placeholder="enter your name" onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder="enter your name" onChange={(e)=>setEmail(e.target.value)}/>
      <button>Submit</button>

      </form>
      <div>
        <ul>
          {state.map((el)=>(
            <div key={el.id}>
                <li>{el.name}</li>
            <li>{el.email}</li>
            <button onClick={()=>dispatch({type:'delete',payload:{id : el.id}})}>Delete</button>
            </div>
           
          ))}
        </ul>
      </div>
      
      



    </div>
  )
}

export default App