import {useState} from 'react';
import './App.css';
import Header from './component/Header';
import Valid from './component/Valid';

function App() {
  const [input,setInput] = useState('');
  const [error,setError] =  useState(false);
  const [success,setSuccess] = useState(false);
  const [failed,setFailed] = useState(false);
  return (
    <div className="App">
      <Header />
      <Valid input={input} setInput={setInput} success={success} setSuccess={setSuccess} failed={failed} setFailed={setFailed} error={error} setError={setError}  />
    </div>
  );
}

export default App;
