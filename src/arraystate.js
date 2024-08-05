import React from 'react'
import { useState } from 'react'
function Arraystate() {
    const[data,setData]=useState([])
    const item=["arun","vijay","ajith","arrov"]
    const display=()=>{
        setData(item);
    }
    const addDisplay=()=>{
        const bowler=["nattrajan"]
        setData([...data,bowler]);
    }
  return (
    <div>
      <h2>Use Array </h2>
      {data.length && data.map((item)=>
      {
      return <li>{item}</li>
      })}
      <button className='btn' onClick={display}>DISPLAY</button><br/>
      <button className='btn' onClick={addDisplay}>DISPLAY</button>
    </div>
  )
}

export default Arraystate
