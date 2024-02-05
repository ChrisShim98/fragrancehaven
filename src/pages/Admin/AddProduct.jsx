import React, { useState, useEffect } from "react";
import FormField from "../../components/form/FormField";
import { addProductForm } from "../../constants/adminFormFields";
import { fieldValidator } from "../../components/form/formValidator";
import { formTitleParser } from "../../helpers/formParser";

const AddProduct = () => {
  const [form, setForm] = useState();
  useEffect(() => {
    let initialForm = {};
    for (let i = 0; i < addProductForm.length; i++) {
      initialForm[addProductForm[i].title] = {
        value: "",
        errorMessage: "",
      };
    }
    setForm(initialForm);
  }, []);
  const updateField = (key, value) => {
    let updatedForm = form;
    updatedForm[key].value = value;
    setForm(updatedForm);
  };
  const submitForm = () => {
    let isFormValid = true;
    let updatedForm = { ...form };
    for (let key in updatedForm) {
      updatedForm[key].errorMessage = fieldValidator(
        key,
        updatedForm[key].value
      );
      updatedForm[key].errorMessage === ""
        ? (isFormValid = true)
        : (isFormValid = false);
    }

    if (isFormValid) {
      console.log("Form submitted!");
    }
    setForm(() => {
      return updatedForm;
    });
  };
  return (
    <div className="flex flex-col gap-4 items-start lg:items-center">
      <h1 className="font-medium text-xl sm:text-3xl pb-2">Add Product</h1>
      <span className="w-24 h-4 border-black border-t-2 pb-4" />
      <div className="flex flex-col gap-4">
      <form className="grid sm:grid-cols-2 gap-4 w-[75vw] sm:w-[85vw] lg:w-[60vw] text-sm lg:text-base max-w-[60rem]">
        {form !== undefined &&
          addProductForm.map((field) => {
            return (
              <FormField
                key={field.title}
                keyValue={field.title}
                title={formTitleParser(field.title)}
                fieldUpdate={updateField}
                colSpan={field.colSpan}
                step={field?.step}
                textArea={field?.textArea}
                error={form[field.title].errorMessage}
                type={field.type}
              />
            );
          })}    
      </form>
      <button className="btn btn-main px-4 py-2 self-end" type="button" onClick={() => {}}>Add Product</button>
      </div>
      
    </div>
  );
};

export default AddProduct;
