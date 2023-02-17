import React,{useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import Modal from './Modal';
import Search from './Search';


function HomePage({item,arr,search,setSearch,searchItem,setItem,isSearch, setIsSearch }) {
  const [h1,setH1] = useState(false);
  const [show,setShow] = useState(false);
  const [itemList,setItemList]=useState();
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




        <div className='home-grid' id="home-grid">
          {
            item.length == 0 && 
              <h3> No Employee Details to show. Add Some Emplyee Details using Add Button</h3>
            
          }
          
        
        {
        item.filter((val)=>{
      if(search == ''){
       
       
        return val;
      }else if( val.name.toLowerCase().includes(search.toLowerCase())){
        return val;
      }
     }).map((el,key)=>{
      return (
        
       
      <div className='home-details' onClick={()=>{setShow(true);setItemList(el)}}>
        
      <div className='home-img'>
            <img src={el.img1} />
      </div>
       <div className='home-detail'>
            <h4>{el.name}</h4>
            <h6>{el.designation}</h6>
       </div>
         
    </div>


    )
})



}
{
  show && <Modal onClose={()=>setShow(false) } show={show} itemList={itemList} />
}

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