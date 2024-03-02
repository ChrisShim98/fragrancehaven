import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComp = () => {
  return (
    <div className="h-[30rem] w-screen">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        transitionTime={1000}
        interval={5000}
        animationHandler={"fade"}
        swipeable={false}
        autoPlay
        className="p-0"
      >
        <div>
          <img
            src="/pic1.png"
            className="object-cover overflow-hidden h-[30rem] w-auto"
            alt=""
          />
        </div>
        <div>
          <img
            src="/pic2.png"
            className="object-cover overflow-hidden h-[30rem] w-auto"
            alt=""
          />
        </div>
        <div>
          <img
            src="/pic3.png"
            className="object-cover overflow-hidden h-[30rem] w-auto"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
