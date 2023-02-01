import axios from 'axios';

export const fetchData = async ()=>{
    
    const response = await fetch(`https://swapi.dev/api/starships/`);
    const data = await response.json();
    return data.results;
    //console.log(data.results);
    // return fetch(`https://swapi.dev/api/starships/`)
    // .then(res => res.json())
    // .then((data)=>data.results)
   
    //return data.result;
}