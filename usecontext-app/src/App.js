import React, { useState, useEffect } from 'react'
import { useFaker } from 'react-fakers'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Cart from './component/Cart';
import Header from './component/Header';


function App() {
 
  return (
    
    <BrowserRouter>
    <Header />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/cart' element={<Cart />} />
       <Route />
     </Routes>
    
    
    </BrowserRouter>
      
     
   
  );
}

export default App;
