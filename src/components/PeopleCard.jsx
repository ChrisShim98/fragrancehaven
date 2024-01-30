import React from "react";

const PeopleCard = ({img, name, role}) => {
  return (
    <div className="flex flex-col gap-4 items-center bg-gray-100 w-3/4 max-w-[15rem] rounded-lg">
      <img src={img} className="p-2" alt={name} />
      <div className="flex flex-col items-center relative top-[-1rem]">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm">{role}</p>
      </div>
    </div>
  );
};

export default PeopleCard;
