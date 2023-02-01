import {useState} from 'react';
import './App.css';
import data from './data';
import { Route, Routes } from "react-router-dom";
import Homepage from './component/Homepage';
import Dashboard from './component/Dashboard';
import About from './component/About';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Details from './page/Details';

function App() {
  const [stock,setStock] = useState(data);

  console.log(data)
  return (
    <div className="App">
      {/* <h1>stocks</h1> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}/> 
         <Route path='/about' element={<About />} />
        <Route path='/stocks' element={<Dashboard stock={stock}/>}/>
        <Route path='/stock/:symbol'  element={<Details stock={stock}/>} />

      </Routes>
     <Footer />
      
    </div>
  );
}

export default App;
