import logo from './logo.svg';
import './App.css';
import react,{useState,useReducer} from 'react';

const ACTION = {
  INCREMENT : 'increment',
  DECREMENT : 'decrement'
}


const reducer = (state,action)=>{
  switch (action.type){
    case ACTION.INCREMENT :
      return {count : state.count + 1}
    case ACTION.DECREMENT :
      return {count : state.count -1}
    default:
      return state
  }
  
}

function App() {

  const [state,dispatch] = useReducer(reducer,{
     count : 0,
  })
  const [count,setCount] = useState(0);

  const increment = ()=>{
    dispatch({type : ACTION.INCREMENT})
  }

  const decrement = ()=> {
    //setCount(count-1)
    dispatch({type : ACTION.DECREMENT});
  }




  return (
    <div className="App">

      <button onClick={decrement}>-</button>
      <h4>{state.count}</h4>
      <button onClick={increment}>+</button>
     
    </div>
  );
}

export default App;
