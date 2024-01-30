import React from "react";
import PeopleCard from "./PeopleCard";

const OurPeople = () => {
  return (
    <div
      className="w-full flex flex-col items-center pb-12 px-4 gap-4 scroll-mt-36"
      id="ourPeople"
    >
      <h1 className="font-medium text-xl sm:text-3xl">Our People</h1>
      <span className="w-24 h-1 border-black border-t-2" />
      <p className="text-sm">Dedicated to serving you.</p>
      <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-center">
        <PeopleCard
          img={
            "https://res.cloudinary.com/dhpo94oka/image/upload/v1706599934/FragranceHaven/Dev/kovk5qyvcplo8i9c0jld.jpg"
          }
          name={"Stacy Rowe"}
          role={"Chief Executive Officer"}
        />
        <PeopleCard
          img={
            "https://res.cloudinary.com/dhpo94oka/image/upload/v1706599934/FragranceHaven/Dev/bm6mjqfxwnzjav22qirc.jpg"
          }
          name={"Ronald Furgie"}
          role={"Head of Sales"}
        />
        <PeopleCard
          img={
            "https://res.cloudinary.com/dhpo94oka/image/upload/v1706599934/FragranceHaven/Dev/mqzxk5oxnbqjqq1ys7sc.jpg"
          }
          name={"Janet White"}
          role={"Head of Procurement"}
        />
      </div>
    </div>
  );
};

export default OurPeople;
