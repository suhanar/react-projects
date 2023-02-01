import React from 'react';
import { useParams} from 'react-router-dom';
import { Link } from "react-router-dom";

function Details({stock}) {

    const params = useParams();
    const symbol = params.symbol;
    console.log(symbol)
   

    //const {} = useParams()
    
    //const symbols = stock.find((item) => item.symbol == symbol)
    //console.log(symbols);
    const rep = symbol.replace(':','');
    const trim = rep.trim();

    const symbols = stock.find((item)=> (
        (item.symbol === trim) 
    ))
   
    // console.log('value of i',item.symbol)
    // console.log('value of symbol',trim)
  return (
    <div>
        {
            symbols && <div className='details'>

                <div className='details-div'><span>Name :</span> {symbols.name}</div>
                <div><span>Symbol  :</span> {symbols.symbol}</div>
                <div><span>Price :</span> {symbols.lastPrice}</div>
                <div><span>Change :</span>{symbols.change}</div>
                <div><span>High :</span> {symbols.high}</div>
                <div><span>Low  :</span>{symbols.low}</div>
                <div><span>Open  :</span>{symbols.open}</div>

                <div style={{marginTop:'20px',marginLeft:'150px',border:'none'}}>
                <Link to='/stocks' className='link' style={{backgroundColor:'black',padding:'5px 10px',marginTop:'20px'}}>Return to Dashboard</Link>


                </div>

                


            </div>
        }
       
            

           
        
        
   
    </div>
  )
}

export default Details