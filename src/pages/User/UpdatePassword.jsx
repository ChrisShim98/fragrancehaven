import React, { useState, useEffect, useRef } from "react";
import FormField from "../../components/form/FormField";
import { updatePasswordForm } from "../../constants/formFields";
import { formTitleParser } from "../../helpers/formParser";
import { fieldValidator } from "../../components/form/formValidator";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/loadingSlice";
import { PostUpdatePassword } from "../../api/accountRequests";
import { closePopup, openPopup } from "../../redux/popupSlice";
import { parseJWT } from "../../helpers/parseJWT";

const UpdatePassword = ({ username }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState();
  const formRef = useRef(null);

  const initializeForm = () => {
    let initialForm = {};
    for (let i = 0; i < updatePasswordForm.length; i++) {
      if (updatePasswordForm[i].title === "username") {
        initialForm[updatePasswordForm[i].title] = {
          value: username,
          errorMessage: "",
        };
      } else {
        initialForm[updatePasswordForm[i].title] = {
          value: "",
          errorMessage: "",
        };
      }
    }
    setForm(initialForm);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  useEffect(() => {
    initializeForm();
  }, []);

  const submitForm = async () => {
    dispatch(setLoading(true));
    let isFormValid = true;
    let updatedForm = { ...form };
    for (let key in updatedForm) {
      updatedForm[key].errorMessage = fieldValidator(
        key,
        updatedForm[key].value
      );
      if (updatedForm[key].errorMessage !== "") {
        isFormValid = false;
      }
    }

    if (isFormValid) {
      updatePassword();
    } else {
      dispatch(setLoading(false));
    }
    setForm(() => {
      return updatedForm;
    });
  };

  const updateField = (key, value) => {
    let updatedForm = form;
    updatedForm[key].value = value;
    setForm(updatedForm);
  };

  const updatePassword = async () => {
    // Construct updatePassword object
    let newUpdatePasswordForm = {};
    for (let key in form) {
      newUpdatePasswordForm[key] = form[key].value;
    }

    let response = await PostUpdatePassword(newUpdatePasswordForm);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    } else {
      parseJWT(response?.token);
      localStorage.setItem("email", response?.email);
      await dispatch(closePopup());
      dispatch(openPopup({ message: "Success!" }));
    }
    dispatch(setLoading(false));
  };

  return (
    <form className="w-full max-w-[800px] grid gap-4" ref={formRef}>
      {form !== undefined &&
        updatePasswordForm.map((field) => {
          return (
            <FormField
              key={field.title}
              keyValue={field.title}
              value={field.title === "username" ? username : ""}
              isDisabled={field?.isDisabled}
              title={formTitleParser(field.title)}
              fieldUpdate={updateField}
              colSpan={field.colSpan}
              error={form[field.title].errorMessage}
              type={field.type}
            />
          );
        })}
      <button
        type="button"
        className="btn btn-main px-4 py-2 mt-8"
        onClick={() => {
          submitForm();
        }}
      >
        Update Password
      </button>
    </form>
  );
};

export default UpdatePassword;
