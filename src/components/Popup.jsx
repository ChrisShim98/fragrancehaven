import React, { useState, useEffect } from "react";
import { FaRegWindowClose } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { closePopup, selectPopup } from "../redux/popupSlice";

const Popup = () => {
  const dispatch = useDispatch();
  const popupDetails = useSelector(selectPopup);
  const [count, setCount] = useState(9);

  useEffect(() => {
    setCount(9);
  }, []);

  useEffect(() => {
    if (popupDetails.message !== "") {
      if (count === 0) {
        dispatch(closePopup());
      }

      const interval = setInterval(() => {
        setCount(count - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    popupDetails.message !== "" && (
      <div
        className={
            popupDetails.isError
            ? "fixed top-[2rem] mx-auto w-[15rem] bg-red-500 text-white p-4 px-6 z-30 rounded-lg grid shadow-lg errorBox"
            : "fixed top-[2rem] mx-auto w-[15rem] bg-undertone text-white p-4 px-6 z-30 rounded-lg grid shadow-lg errorBox"
        }
      >
        <div
          className="absolute top-[10px] right-[10px] flex justify-end cursor-pointer"
          onClick={() => {dispatch(closePopup());}}
        >
          <FaRegWindowClose />
        </div>
        <p className="pt-2 font-medium">{popupDetails.message}</p>
      </div>
    )
  );
};

export default Popup;
