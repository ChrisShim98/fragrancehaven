import React from "react";

const ContactUs = () => {
  return (
    <div
      className="w-full flex flex-col items-center pb-12 px-4 gap-4 py-10 bg-gray-100 scroll-mt-28"
      id="contactUs"
    >
      <h1 className="font-medium text-xl sm:text-3xl">Contact Us</h1>
      <span className="w-24 h-1 border-black border-t-2" />
      <p className="text-sm">Get In Touch</p>
      <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-center">
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name*"
              name="Name"
              className="py-1 px-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Email*"
              name="Email"
              className="py-1 px-2 rounded-lg"
            />
          </div>
          <input
            type="text"
            placeholder="Subject*"
            name="Subject"
            className="py-1 px-2 rounded-lg"
          />
          <textarea
            className="py-1 px-2 rounded-lg"
            placeholder="Your Message*"
            name="Message"
            cols="30"
            rows="10"
          ></textarea>
          <input
            type="submit"
            className="transition ease-in duration-300 bg-undertone text-white hover:bg-primary hover:shadow-lg rounded-lg px-10 py-2 font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
