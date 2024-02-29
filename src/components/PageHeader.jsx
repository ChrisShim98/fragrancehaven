import React from "react";

const PageHeader = ({ pageHeader, id = "" }) => {
  return (
    <div
      id={id}
      className="w-full bg-gray-100 py-6 text-xl font-medium text-center"
    >
      <h1 className="tracking-wide">{pageHeader}</h1>
    </div>
  );
};

export default PageHeader;
