import React from 'react'
import { CarouselWrapper } from "react-pretty-carousel";

import './Carousel.css'

import image1 from '../assets/selezione1.png'
import image2 from '../assets/selezione2.png'
import image3 from '../assets/selezione3.png'
import image4 from '../assets/selezione4.png'
import image5 from '../assets/selezione5.png'


function Carousel() {
  return (
<div className="carousel" mode="gallery">
<CarouselWrapper items={1}>
      <div>
   <img className="img-carousel" src={image1} alt={"image1"} />
   <p>test</p>
   </div>
   <img className="img-carousel" src={image2} alt={"image2"} />
   <img className="img-carousel" src={image3} alt={"image3"} />
   <img className="img-carousel" src={image4} alt={"image4"} />
   <img className="img-carousel" src={image5} alt={"image5"} />
</CarouselWrapper>

 </div>
  )
}

export default Carousel