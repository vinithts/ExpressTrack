import React from 'react'
import './Screen.css'
import MainVideo from '../assets/video.mp4'
const Screen=()=>{
  return (
         <div className='hero'>
                <video autoPlay loop muted id='video'>
                    <source  src={MainVideo} type="video/mp4" />
                </video>
                <div className="hero-text">
                    <h1>EXPRESS</h1>
                    <h1><span className="blue">Courier </span> Services</h1>
                    <p>Our Aim is to Deliver Your Safe and Secure All Over the World .</p>
                    <img  className="mob" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4smIFqSWm42Dx3_Rg10RnI6-fo_jtQrxRgw&usqp=CAU" alt="img"/>
                    <div className="btn-group">
                        <button className="btn">Our Profile</button>
                        {/* <button className="btn btn-outline">Documentation</button> */}
                        <button className="btn btn-outline"><li href='/Login'>Login</li></button>
                    </div>
                </div>
                <div className="bottom-text">
                    <h2>Courier Services</h2>
                </div>
            </div>
        )
    }
    
  

export default Screen
