import {useState,useReducer} from 'react';

import React from 'react';


const initialState = {
  id : Date.now(),
  name : 'suhana',
  email : 's@gmail.com'
}

function App() {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  return (
    <div>

      <form>
      <input type="text" placeholder="enter your name" onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder="enter your name" onChange={(e)=>setEmail(e.target.val)}/>
      <button>Submit</button>

      </form>
      
      



    </div>
  )
}

export default App