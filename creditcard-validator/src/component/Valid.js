import React,{useEffect} from 'react';
import MessageSuccess from './MessageSuccess';
import MessageFailed from './MessageFailed';

function Valid({input,setInput,success,setSuccess,failed,setFailed,error,setError}) {

    const handleChange = (e) =>{
        
        setInput(e.target.value);
        setFailed('');
        setSuccess('');
        setError(false);
    }

   
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(input == ''){
            setError(!error);
        }

        let validNum = input.toString().split('').map(Number);
        if(validNum.length % 2== 0 ){
         validNum = validNum.map((n,i)=> i%2 == 0 ? n*2 : n);
        }
        else{
         validNum = validNum.map((n,i)=> i%2 !==0 ? n*2 : n) 
        }
        
       validNum = validNum.map((el,i)=> el > 9 ? el - 9 : el)
       //console.log(validNum)
     
        const reducer = validNum.reduce((total,i)=> total += i);
        //console.log(reducer);
     
        if(reducer %10 == 0){
      
         setSuccess(!success);
         setFailed('')
         
        }
        else{
        
         setFailed(!failed);
         setSuccess('')
        }
        setInput('');

      
    }




  return (
    <div className='form'>

        <form className='form-div' onSubmit={handleSubmit}>
           { error && <p>Please Enter a number</p> } 
           <input type="text" placeholder="Enter your credit card number..." onChange={handleChange} value={input}/>
           <button>CHECK</button>
        </form>
         { success  && <MessageSuccess /> }
         { failed &&  <MessageFailed /> }
        
        
        
    </div>
  )
}

export default Valid