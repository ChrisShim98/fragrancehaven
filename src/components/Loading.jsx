import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="text-[#e4a0f7] bg-[#000000da] w-screen h-screen fixed top-0 left-0 z-50 flex flex-col items-center justify-center gap-4">
      <p className="text-3xl font-medium">Loading</p>
      <div className="text-3xl loading">
        <AiOutlineLoading />
      </div>
    </div>
  );
};

export default Loading;
