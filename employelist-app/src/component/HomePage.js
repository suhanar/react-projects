import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Search from './Search';


function HomePage({item,arr,search,setSearch,searchItem,setItem,isSearch, setIsSearch }) {
  return (
    <div className='homepage'>
      
        {/* <div className='home-input'>
            <input placeholder='Search...' type="text"/>
            <button className='home-btn'>Search</button>
        </div> */}
       <Search search={search} setSearch={setSearch} searchItem={searchItem} setItem={setItem} isSearch={isSearch} setIsSearch={setIsSearch} />
        <div className='home-add-btn'>
        <Link to='/emp'>
          <button className='home-add home-change'>Add Employee</button>
          </Link>

          <Link to='/list'>
          <button className='home-edit home-change'>Edit Employee</button>
          </Link>
        </div>




        <div className='home-grid'>
        {
        item.filter((val)=>{
      if(search == ''){
        return val
      }else if( val.name.toLowerCase().includes(search.toLowerCase())){
        return val;
      }
     }).map((el,key)=>{
      return (
        
       
      <div className='home-details'>
      <div className='home-img'>
            <img src={el.img1} />
      </div>
       <div className='home-detail'>
            <h4>{el.name}</h4>
            <h6>{el.designation}</h6>
       </div>
       
    </div>
    )
})}

</div>

        





        
       

        {/* { !isSearch ? 
        
        <div className='home-grid'>
         
          {
            
            item.map((el)=> 
            el !==undefined?
            <div className='home-details'>
              <div className='home-img'>
                    <img src={el.img1} />
              </div>
               <div className='home-detail'>
                    <h4>{el.name}</h4>
                    <h6>{el.designation}</h6>
               </div>
               
            </div>:0
            )
          }
          </div>  

        : <div className='home-grid'>
         { arr.map((el)=>  <div className='home-details'>
              <div className='home-img'>
                    <img src={el.img1} />
              </div>
               <div className='home-detail'>
                    <h4>{el.name}</h4>
                    <h6>{el.designation}</h6>
               </div>
               
            </div>)}
        </div> 
        } */}
    </div>
  )
}

export default HomePage