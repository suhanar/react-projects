import React,{useContext} from 'react';
import {Context} from '../Context';



function About() {
    const val = useContext(Context);
  return (
    <div>About {val}</div>
  )
}

export default About