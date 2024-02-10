import React from 'react';
import Slider from "react-slick";
import slid1 from "../../assets/images/127ce3cf-1114-4fdf-90de-5798a8d5c7ab.png"
import slid2 from "../../assets/images/1cc4c0fc-9ba0-412f-a492-24e26bd58477.png"
import slid3 from "../../assets/images/2e299e90-97ef-443d-ab49-d880e19044bf.png"
import slid4 from "../../assets/images/30033578-2c2c-4dba-8d4f-fe0d1f9642d9.png"


export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };
  return (
    <div className='container-fluid'>
    <Slider {...settings}>
    
    <img src={slid1} alt="" />
    <img src={slid2} alt="" />
    <img src={slid3} alt="" />
    <img src={slid4} alt="" />

    </Slider>
    </div>
  )
}
