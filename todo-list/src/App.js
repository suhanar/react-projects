import {useState} from 'react';
import './App.css';
import Todo from './component/Todo';
import TodoList from './component/TodoList';

function App() {
  const [list,setList] =useState([]);
  const [input,setInput] = useState('');

  const addItem = (item)=>{
    const newList = {
      id : Math.random(),
      item:item,
      completed:false
    }
      setList([...list,newList]);
      setInput('');
      console.log(list);
  }


  const deleteItem = (id) =>{
    const newList = list.filter((el)=> el.id != id);
    setList(newList);
  }
  return (
    <div className="App">
     <h1>TODO LIST</h1>
     <Todo addItem={addItem}   input={input} setInput={setInput}/>
     <TodoList list={list}  deleteItem = {deleteItem}/>
    </div>
  );
}

export default App;
