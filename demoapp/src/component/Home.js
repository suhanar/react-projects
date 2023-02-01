import React from 'react';
import Nav from './Nav';

function Home({user,setCount,count}) {
  return (
    <div>
       {
        user.map((el)=> (
          <div key={Math.random()}>{el.title}</div>
        ))
      }
      <button onClick={()=>setCount(1)}>Click</button>
      <h1>{count}</h1>

      <Nav user={user}/>
       
    </div>
  )
}

export default Home