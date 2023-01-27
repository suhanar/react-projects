import {useState,useEffect} from 'react';
import './App.css';
import Header from './component/Header';
import Valid from './component/Valid';
import Validation from './component/Validation';

function App() {
  const [input,setInput] = useState('');
  const [error,setError] =  useState(false);
  const [success,setSuccess] = useState(false);
  const [failed,setFailed] = useState(false);

  useEffect(() => {
    handleValid();
  }, [input]);


  const handleValid = () =>{
   // e.preventDefault();
   //console.log('working');
   if(input == ''){
    setError(true);
    setFailed('')
    setSuccess('')

   }
   else{

   let validNum = input.split('').map(Number);
   if(validNum.length % 2== 0 ){
    validNum = validNum.map((n,i)=> i%2 == 0 ? n*2 : n);
   }
   else{
    validNum = validNum.map((n,i)=> i%2 !==0 ? n*2 : n) 
   }
   
  validNum = validNum.map((el,i)=> el > 9 ? el - 9 : el)
  //console.log(validNum)

   const reducer = validNum.reduce((total,i)=> total += i);
   //console.log(reducer);

   if(reducer %10 == 0){
    console.log(true);
    setSuccess(true);
    setFailed('')
   }
   else{
    console.log(false);
    setFailed(true);
    setSuccess('')
   }
  }
  
}






  return (
    <div className="App">
      <Header />
      <Validation input={input} setInput={setInput} success={success} failed={failed}/>
        {/* <Valid input={input} setInput={setInput} success={success} setSuccess={setSuccess} failed={failed} setFailed={setFailed} error={error} setError={setError}  /> */}
    </div>  
  );
}

export default App;
