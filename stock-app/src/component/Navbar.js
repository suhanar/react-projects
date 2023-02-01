import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className='nav'>
      <ul>
        <li> <Link to='/' className='link'>
        Home
        </Link></li>
        <li><Link to='/about' className='link'>About</Link></li>

        <li><Link to='/stocks' className='link'>Dashboard</Link></li>
      </ul>
     


    </div>
  )
}

export default Navbar