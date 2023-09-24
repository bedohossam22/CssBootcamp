
import 'lightbox2/dist/css/lightbox.min.css';
import { useEffect , useRef } from 'react';
import image from "../assets/jhin 2.jpg";
import image2 from "../assets/jhin 3.jpg";
import image3 from "../assets/jhin 4.jpg";
import image4 from "../assets/jhin5.jpg";
import image5 from "../assets/jhin6.jpg";
import "lightbox2/dist/js/lightbox-plus-jquery";
import { Fade } from "react-reveal";
import lightbox from 'lightbox2';
import { useState } from 'react';
import test from "../assets/test.jhin.gif";
export default function Lightboxo (){
  
    return (
  <div className='grid-container container mt-5'>
  <div className='grid-item grid-item1 '>
      <h1>Let me help you Create Something <span>Beautiful.</span>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus molestiae, nisi ratione vel dolorem aut cumque ex saepe sed ?</p>
      </h1>
  </div>
 
  <a href={image}><div className='grid-item grid-item2'>
    </div></a>
  <a href={image2}>  <div className='grid-item grid-item3'></div></a>
    
  <a href={image3}>  <div className='grid-item grid-item4 big-size'></div></a>
   <a href={image4}> <div className='grid-item grid-item5'></div></a>
   <div className='grid-item grid-item6'></div>
    </div>
   

    )
}
   
