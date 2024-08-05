import React, { useState } from 'react'

function Use() {
  const[display,setDisplay]=useState(1234)
  const incrementDisplay=()=>
  {
    setDisplay(display+1)
  }
   const decrementDisplay=()=>
   {
    setDisplay(display-1)
  }
  return (
    <div>
      <h1>{display}</h1>
      <br/>
      <button onClick={incrementDisplay}>Increase</button>
      <button onClick={decrementDisplay}>Decrease</button>
    </div>
  )
}

export default Use
