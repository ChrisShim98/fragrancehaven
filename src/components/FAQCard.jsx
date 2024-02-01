import React, { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const FAQCard = ({ faq }) => {
    const [opened, setOpened] = useState(false)
  return (
    <div className={opened ? "grid gap-2 bg-undertone text-white rounded-lg overflow-hidden max-w-[50rem]" : "grid bg-undertone text-white rounded-lg overflow-hidden max-w-[50rem]"}>
      <button onClick={() => {setOpened(!opened)}} className="grid grid-cols-9 text-left p-2">
        <b className="col-span-1 justify-self-center">Q:</b>
        <h1 className="col-span-7">{faq.question}</h1>
        <p className="col-span-1 text-xl place-self-center">
          <IoMdArrowDropdownCircle />
        </p>
      </button>
      <div className={opened ? "grid grid-cols-9 text-left p-2" : "grid grid-cols-9 text-left p-0 h-0"}>
        <b className="col-span-1 justify-self-center">A:</b>
        <h1 className="col-span-8 text-primary">{faq.answer}</h1>
      </div>
    </div>
  );
};

export default FAQCard;
