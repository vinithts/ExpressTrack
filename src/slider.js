import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Simpleslider() {
    var settings = {
        dots: true,
       
      };
  return (
    
     <Slider>
    <div>
        <h3><img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/DotGG_domain_logo.svg"/></h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
      </Slider>
      
  )
}

export default Simpleslider
