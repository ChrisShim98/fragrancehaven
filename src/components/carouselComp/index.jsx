import React, {useState} from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Pic1 from './pic1.png'
import Pic2 from './pic2.png'
import Pic3 from './pic3.png'
import './index.css'

const CarouselComp = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="h-screen w-screen">
        <Carousel 
                infiniteLoop 
                useKeyboardArrows 
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                transitionTime={1000}
                interval={5000}
                animationHandler={'fade'}
                onChange={setCurrentSlide}
                swipeable={false}
                autoPlay
                className="p-0">
                
                <div>
                    <img src={Pic1} className="photo" alt="" />
                </div>
                <div>
                    <img src={Pic2} className="photo" alt="" />
                </div>
                <div>
                    <img src={Pic3} className="photo" alt="" />
                </div>
            </Carousel>
    </div>
  )
}

export default CarouselComp