import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Screen from './Components/Screen';
import About from './Components/About';
import Blog from './Components/Blog';
import Login from './Components/Login';
import Footer from './Components/Footer';
// import Simpleslider from './slider';
import Mycard from './reactcarsolue';
import ScrollToTop from './scroll';

function App() {
  return (
    <>
    <Navbar/>
    <Screen/>
    <About/>
    <Blog/>
    <Login/>
    <Footer/>
<ScrollToTop/>    
{/* <Simpleslider/> */}
    {/* <Mycard /> */}
    </>
  );
}

export default App
