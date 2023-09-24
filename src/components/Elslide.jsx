import React, { useRef } from "react";
import Slider from "react-slick";
import "../slick1.css";
import "../slick2.css";
import image1 from "../assets/Veno.jpg";
import image2 from "../assets/Logo2.png";
import image3 from "../assets/9RLNDZgcRdSgn_lsb8iv9A.webp";
import image4 from "../assets/Wake-Up-Kowalski-penguins-of-madagascar-14228700-401-303.jpg";
import image5 from "../assets/Profile_-_Vanellope_Von_schweetz.jpg";
export default function Elslide() {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1 ,
    autoplay: true, 
    autoplaySpeed: 5000
  };

  return (
    <div>  
      <Slider ref={sliderRef} {...settings}>
        <div className="d-flex flex-column">
          <h3><img src={image1}/></h3>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</h2>
        </div>
        <div className="d-flex flex-column">
        <h3><img src={image2} id="fix"/></h3>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</h2>
        </div>
        <div className="d-flex flex-column">
        <h3><img src={image3}/></h3>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</h2>
        </div>
        <div className="d-flex flex-column">
        <h3><img src={image4}/></h3>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</h2>
        </div>
        <div className="d-flex flex-column">
        <h3><img src={image5}/></h3>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</h2>
        </div>
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button className="button test3" onClick={previous}>
        ◀
        </button>
        <button className="button testz" onClick={next}>
        ▶
        </button>
      </div>
    </div>
  );
}
