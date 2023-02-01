import React,{useContext} from 'react';
import { CounterContext } from '../Context';

function Nav() {

  const {count,setCount} = useContext(CounterContext);
  
  return (
    <div>
       {count}

       <button onClick={()=>setCount(count+1)}>Click</button>
    
    </div>
  )
}

export default Nav