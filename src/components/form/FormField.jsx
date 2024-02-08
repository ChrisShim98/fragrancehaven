import React from "react";

const FormField = ({
  keyValue,
  title,
  fieldUpdate = () => {},
  colSpan,
  error = "",
  type = "text",
  step = null,
  textArea = false,
  value = ""
}) => {
  return (
    <div
      className={`flex flex-col gap-1 ${
        +colSpan === 1 ? "sm:col-span-1" : "sm:col-span-2"
      }`}
    >
      <label>{title}</label>
      {textArea ? (
        <textarea
          id={keyValue}
          defaultValue={value}
          onChange={(e) => {
            fieldUpdate(keyValue, e.target.value);
          }}
          className="rounded-lg border py-2 px-4"
          rows="4"
        />
      ) : (
        <input
          id={keyValue}
          defaultValue={value}
          step={step}
          onChange={(e) => {
            fieldUpdate(keyValue, e.target.value);
          }}
          type={type}
          className="rounded-lg border py-2 px-4"
        />
      )}
      <p className={error === "" ? "hidden" : "text-red-500 text-sm"}>
        {error}
      </p>
    </div>
  );
};

export default FormField;
