import React, { useState, useEffect } from "react";
import FormField from "./form/FormField";
import { billingDetailsForm } from "../constants/formFields";
import { formTitleParser } from "../helpers/formParser";
import { fieldValidator } from "./form/formValidator";

const BillingDetails = ({ placeOrder, setPlaceOrder = () => {} }) => {
  const [form, setForm] = useState();

  useEffect(() => {
    let initialForm = {};
    for (let i = 0; i < billingDetailsForm.length; i++) {
      initialForm[billingDetailsForm[i].title] = {
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

    setPlaceOrder(false);
    if (isFormValid) {
      console.log("Form submitted!");
    }
    setForm(() => {
      return updatedForm;
    });
  };

  useEffect(() => {
    if (placeOrder) {
      submitForm();
    }
  }, [placeOrder]);

  return (
    <div className="grid gap-4">
      <h2 className="text-lg font-medium">Billing Details</h2>
      <form className="grid sm:grid-cols-2 gap-4">
        {form !== undefined &&
          billingDetailsForm.map((field) => {
            return (
              <FormField
                key={field.title}
                keyValue={field.title}
                title={formTitleParser(field.title)}
                fieldUpdate={updateField}
                colSpan={field.colSpan}
                error={form[field.title].errorMessage}
                type={field.type}
              />
            );
          })}
      </form>
    </div>
  );
};

export default BillingDetails;
