import React from "react";

const StoreLocation = () => {
  return (
    <div className="w-full flex flex-col items-center py-10 bg-gray-100 px-4" id="storeLocation">
      <h1 className="font-medium text-xl sm:text-3xl pb-2">Store Location</h1>
      <span className="w-24 h-1 border-black border-t-2 pb-8" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.296413291382!2d-76.79698102408788!3d18.01144238452639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb3fb175abb25f%3A0x8f3dc1c50fdb30fb!2sWinchester%20Business%20Centre!5e0!3m2!1sen!2sjm!4v1706591250578!5m2!1sen!2sjm"
        className="w-full md:w-1/2 h-[20rem] md:h-[35rem] rounded-lg"
        style={{border: "0"}}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default StoreLocation;
