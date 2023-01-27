import {useState} from 'react';
import './App.css';
import userData from './data';
import StudentCard from './component/StudentCard';

function App() {
  const [user,setUser] = useState(userData)
  return (
    <div className="App">
     <h1>Student Data</h1>

     <StudentCard user={user} />
     
     
     
    </div>
  );
}

export default App;
