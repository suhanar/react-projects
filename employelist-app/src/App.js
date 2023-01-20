import {useState} from 'react';
import './App.css';
import AddEmployee from './component/AddEmployee';
import EmployeeList from './component/EmployeeList';

function App() {
  const [item,setItem] = useState([]);
  const [input,setInput] = useState('');
  const [Designation,setDesignation] = useState('');
  const [isEdit,setIsEdit] = useState(false);

  const addItem = (item1,item2) =>{
    const newItem = { name:item1,
                designation:item2,
                id:Math.random()};
    setItem([newItem,...item]);
    console.log(item);
    setInput('');
    setDesignation('');
  }

  const deleteItem = (id)=>{
    const newList = item.filter((el)=> el.id !== id);
    setItem(newList);
  }
  const editItem = (id)=>{
    const newList = item.filter((el)=> el.id !== id);
    const edit = item.find((el)=> el.id == id);
    setInput(edit.name);
    setItem(newList);
    setDesignation(edit.designation)
    setIsEdit(!isEdit);

  }
  
  return (
    <div className="App">
      <h1>Employee List</h1>
      <AddEmployee addItem={addItem}  input={input} setInput={setInput} Designation={Designation} setDesignation={setDesignation} isEdit={isEdit} setIsEdit={setIsEdit}/>
      <EmployeeList item={item} deleteItem={deleteItem} editItem={editItem}/>
      
    </div>
  );
}

export default App;
