import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ScrollToTop from './scroll'
import Marquee from "react-fast-marquee";
function Lazy() {
const url="https://api.unsplash.com/search/photos?query=southafrica&client_id=ecYpOmrVQ3vj2E7VLTBEpjuzuLAMQQOde3ZCj3uCp5c"

    const[images,setImages]=useState([])
    const getImages=()=>{
        axios.get(url).then((res)=>{
            console.log(res.data.results)
            setImages(res.data.results)
        })
    }
    useEffect(()=>{
        getImages()
    },[])
  return (
    <div>
      <ScrollToTop/>
      <Marquee>
  I can be a React component, multiple React components, or just some text.
</Marquee>
      {images.map(image=>{
        return(
          
        <LazyLoadImage
        effect="blur" 
        src={image.urls.regular} 
        alt={image.alt_description}
         key={image.id}
         height="500px"
         width="400px"
         placeholderSrc={process.env.PUBLIC_URL+'/logo192.png'}
         />)
      })}
    </div>
  )
}

export default Lazy
