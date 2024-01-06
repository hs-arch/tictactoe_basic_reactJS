import React from 'react'
import './Square.css'
import { useState } from 'react';

const Square = (prop: any) => {

//const[state, setState] = useState("");

  return (
    <div>
        <button 
            className = "square" 
            id={prop.squareNo}
            onClick = {()=>{prop.onClick()}}
        >
            {prop.value}
        </button>
    </div>
  )
}

export default Square