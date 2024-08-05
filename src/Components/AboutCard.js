import React from 'react'
import './About.css'
const AboutCard=(props)=> {
  return (
    <>
    <div className='icon-container'>
     {props.icon} 
    </div>
    <h3>{props.head}</h3>
    <p>{props.text}</p>
    </>
  )
}

export default AboutCard
