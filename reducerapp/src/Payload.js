import {useReducer} from 'react';


const ACTION = {
  INCREMENT : 'increment',
  DECREMENT : 'decrement'
}

const reducer=(state,action)=>{
  switch(action.type){
    case ACTION.INCREMENT:
      return {count:state.count+action.payload};
    case ACTION.DECREMENT:
      return {count:state.count-action.payload};
  }


}
// const action = {type:increment};
// dispatch(action)

function Counter() {
  const [state,dispatch]=useReducer(reducer,{
    count : 0,
  })

  return(
    <div>
        <button onClick={()=>dispatch({type:ACTION.INCREMENT,payload:5})}>+5</button>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:ACTION.DECREMENT,payload:5})}>-5</button>
    </div>
  )


 
}

export default Counter;