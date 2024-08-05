import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" }); 
        }
    };
    return (
        <div className='navbar'>
            <div className="container">
                <h1 style={{ marginLeft: '1rem', color: '#00d8ff'}} >EXpress Courier</h1>
                <ul className={click ? 'nav active' : 'nav'}>
                    <li className="nav-item">
                        <a href="/" style={{textDecoration:"none"}}>Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" style={{textDecoration:"none"}}>Tracking</a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" style={{textDecoration:"none"}}>Aboutus</a>
                    </li>
                    <li className="nav-item" >
                        <a href="/contact" style={{textDecoration:"none"}}>Contact</a>
                    </li>
                    <li className="nav-item" onClick={scrollToSection("#Login")}>
                        <a className='btn' href="#Login">Sign UP</a>
                    </li>
                </ul>
                <div onClick={handleClick} className="hamburger">
                </div>
                </div>
                </div>
    )
}

export default Navbar
