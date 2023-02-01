import {useState,useEffect} from 'react';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import stock from './data';
import {Context} from './Context';
import {CounterContext} from './Context';
import Nav from './component/Nav';
// import {createContext} from 'react';


function App() {
 // const name = 'suhana'; // state
 const [user,setUser] =  useState(stock);  //user = stock
 const [count,setCount] = useState(0)
// initial sytae it is the value that we declare for user variable
const value = "this is a context";





  
  return (
    <div className="App">
      
      <Home user={user} setCount={setCount} count={count} />
      <Context.Provider value = {value}>
         <About />
       
      </Context.Provider>
      <CounterContext.Provider value={{count,setCount}}>
            <Nav />
      </CounterContext.Provider>
       
    </div>
  );
}

export default App;
