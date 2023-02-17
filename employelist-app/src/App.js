import React, {useState,useEffect} from 'react';
import './App.css';
import AddEmployee from './component/AddEmployee';
import EmployeeList from './component/EmployeeList';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import HomePage from './component/HomePage';
import Header from './component/Header';
import Footer from './component/Footer';



function App() {
  const [item,setItem] = useState([]);
  const [input,setInput] = useState('');
  const [Designation,setDesignation] = useState('');
  const [email,setEmail] = useState('');
  const [ph,setPh] = useState('');
  const [img,setImg] = useState(null);
  const [isEdit,setIsEdit] = useState(false);
  const [edit,setEdit] = useState('');
  const [search,setSearch] = useState('');
  const [isSearch,setIsSearch] = useState(false);
  const [show,setShow] = useState(false);
  const [delShow,setdelShow] = useState(false);
  


  useEffect(() => {
    const savedList = localStorage.getItem("employee")
    if (savedList && savedList !== "undefined" && savedList !== "null") {
      setItem(JSON.parse(savedList))
    }
  }, [img])

  

  const addItem = (item1,item2,img,email,ph) =>{
    const newItem = { 
                img1:img,
                name:item1,
                designation:item2,
                email:email,
                ph:ph,
                id:Math.random(),
              };
    localStorage.setItem("employee", JSON.stringify([newItem, ...item]))
    
    setItem([newItem,...item]);
    //console.log(item);
    setInput('');
    setDesignation('');
    setEmail('');
    setPh('');
   
    
    
  }

  const deleteItem = (id)=>{
   

    const del = prompt('Do you want to delete the user? type y or n for no');
    if(del.toLowerCase() == 'y'){
      const newList = item.filter((el)=> el.id !== id);
    localStorage.setItem(
      "employee",
      JSON.stringify([...newList])
    )
    setItem(newList);

    }else{
      return item;
    }
    
  }
  const editItem = (id)=>{
    const newList = item.filter((el)=> el.id !== id);
    const edit = item.find((el)=> el.id == id);
    localStorage.setItem("employee", JSON.stringify([...newList]))
    setInput(edit.name);
    setItem(newList);
    setDesignation(edit.designation)
    setIsEdit(!isEdit);
    setEmail(edit.email);
    setPh(edit.ph);

  }


//   const searchItem = (term)=>{
    
//     const newItem = item.filter((el)=> el.name.toLowerCase() === term.toLowerCase());
    
//       //setItem(newItem);
//       setArr(newItem);
    
//     setSearch('');
    
//     console.log(term);
// }


  
  return (
    
    
  <BrowserRouter>
   <Header />
   
    <Routes>
   
    
    {/* <Route> */} 
     
   
      
    
      <Route path="/" element={<HomePage  item={item} setItem={setItem} search={search} setSearch={setSearch}  isSearch={isSearch} setIsSearch={setIsSearch} />} />
        <Route path='/emp' element={<AddEmployee addItem={addItem}  input={input} setInput={setInput} Designation={Designation} setDesignation={setDesignation} isEdit={isEdit} setIsEdit={setIsEdit} img={img} setImg={setImg} show={show} setShow={setShow} email={email} setEmail={setEmail} ph={ph} setPh={setPh}/>} />
        <Route path='/list' element={ <EmployeeList item={item} deleteItem={deleteItem} editItem={editItem} delShow={delShow} setdelShow={setdelShow}/>} />
       
       
        {/* <AddEmployee addItem={addItem}  input={input} setInput={setInput} Designation={Designation} setDesignation={setDesignation} isEdit={isEdit} setIsEdit={setIsEdit}/>
      <EmployeeList item={item} deleteItem={deleteItem} editItem={editItem}/>
        */}
         
        {/* </Route> */}
      
    </Routes> 
   <Footer />
  
   </BrowserRouter>
   
    // <div className="App">
    //    <h1>Employee List</h1>
      
    //     <AddEmployee addItem={addItem}  input={input} setInput={setInput} Designation={Designation} setDesignation={setDesignation} isEdit={isEdit} setIsEdit={setIsEdit}/>
    //   <EmployeeList item={item} deleteItem={deleteItem} editItem={editItem}/>
      
    //  </div>
  );
}

export default App;
