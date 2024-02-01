import React from "react";
import PageHeader from "../components/PageHeader";
import { faqs } from "../constants/faqsConst";
import FAQCard from "../components/FAQCard";

const FAQs = () => {
  return (
    <div className="flex flex-col w-screen gap-8">
      <PageHeader pageHeader={"Frequently Asked Questions"} />
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <h2 className="font-medium text-xl sm:text-3xl pb-2 md:w-1/2">
          Here are some of our most asked questions from customers like you!
        </h2>
        <span className="w-24 lg:w-48 h-1 border-black border-t-2 pb-4" />
        <div className="flex flex-col items-start gap-4 py-8">
          {faqs.map((faq, index) => {
            return (
              <div key={index}>
                <FAQCard faq={faq} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
