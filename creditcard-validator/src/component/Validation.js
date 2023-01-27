import React from 'react';
import MessageFailed from './MessageFailed';
import MessageSuccess from './MessageSuccess';

function Validation({input,setInput,success,failed,error}) {
    
  return (
    <div className='form'>
        <form className='form-div'>

        { error && <p>Please Enter a number</p> } 
        <input type="text" placeholder="enter your card number"  onChange={(e)=> setInput(e.target.value)} />
        </form>
        

        { success  && <MessageSuccess /> }
         { failed &&  <MessageFailed /> }
    </div>
  )
}

export default Validation