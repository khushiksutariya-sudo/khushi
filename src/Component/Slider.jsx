import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pannu from "../Images/pannu.avif"
import halloween from "../Images/halloween.webp"


const SliderBar = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 20000,
    cssEase: "linear"
  };

  return (
    <div className="slider-container" >
      <Slider className='custom-slider' {...settings}>

        <div>
          <img src={pannu} />
        </div>
        <div>
          <img src={halloween} />
        </div>
        
      </Slider>
    </div>
  )
}

export default SliderBar
