import React from "react";
import StoreLocation from "../components/StoreLocation";
import OurPeople from "../components/OurPeople";
import ContactUs from "../components/ContactUs";
import ScrollToAnchor from "../helpers/ScrollToAnchor";

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      <ScrollToAnchor />
      <div className="w-full bg-gray-100 py-6 text-lg text-center" id="about">
        <h1>About Us</h1>
      </div>
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <h3 className="text-sm md:text-base">Who Are We</h3>
        <h2 className="font-medium text-xl sm:text-3xl pb-2">Welcome To Fragrance Haven</h2>
        <span className="w-24 h-1 border-black border-t-2 pb-4" />
        <p className="w-[90%] md:w-1/2">Where luxury meets aroma. Immerse yourself in a world of exquisite scents curated from renowned brands, each bottle a masterpiece crafted to elevate your essence. Explore our curated collection, discover timeless classics and new arrivals, and indulge in the art of fragrance. Unveil your signature scent at Fragrance Haven, where sophistication and style converge in a haven of olfactory delights.</p>
      </div>
      <StoreLocation />
      <OurPeople />
      <ContactUs />
    </div>
  );
};

export default AboutUs;
