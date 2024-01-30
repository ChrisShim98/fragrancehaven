import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = ({ display, toTop }) => {
  return (
    <div
      onClick={() => {
        toTop();
      }}
      className={
        display
          ? "fixed bottom-6 right-6 w-10 h-10 rounded-full bg-undertone hover:bg-primary text-white grid place-content-center transition ease-in duration-300 opacity-100"
          : "fixed bottom-6 right-6 w-10 h-10 rounded-full bg-undertone hover:bg-primary text-white grid place-content-center transition ease-in duration-300 opacity-0"
      }
    >
      <FaArrowUp />{" "}
    </div>
  );
};

export default ScrollToTop;
