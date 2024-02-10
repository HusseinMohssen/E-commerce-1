import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from "react-slick";


export default function Categories() {

  const [categories,setCategories] =useState([]);
  async function getCategories(){
      let {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
      setCategories(data.data);
      console.log(data.data);
  }
  useEffect(() => {
    getCategories()
    },[])
  
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
    };

  return (
    <div className='container my-4'>
      <h3>Shop Popular Categories</h3>
      <Slider {...settings}>
    
      {
        categories.map((item)=>
        <div className='px-2' key={item._id}>
            <img src={item.image} className='w-100' height={300} alt="" /> 
            <h5>{item.name}</h5>
        </div>
          
        )
      }

      </Slider>
    
    </div>
  )
}
