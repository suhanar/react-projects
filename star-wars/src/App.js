import {useState,useEffect} from 'react';
import './App.css';
import {fetchData} from './services/sw-api' ;
import StarShipCard from './component/StarShipCard';
import Header from './component/Header';
import { Route, Routes } from "react-router-dom";
import StarShipPage from './page/StarShipPage';

function App() {

  const [ship,setShip] = useState([]);
  // const getShip = async ()=>{
  //     const response = await fetch(`https://swapi.dev/api/starships/`);
  //     const data = await response.json();
  //     setShip(data.results);
  // }
  useEffect(()=> {
    fetchData()
    .then(data => {
      setShip(data);
      console.log(data);
    })
    
   
  },[]);




  return (
    <div className="App">
    
     <Header />

      <div className='star-card'>
        <Routes>
          <Route path='/' element={<StarShipCard ship={ship}/>} />
          <Route path='/starship' element={<StarShipPage ship={ship}/>} />
        </Routes>
    
      </div>
     
    </div>
  );
}

export default App;
