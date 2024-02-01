import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { loginForm, registerForm, forgetPasswordForm } from "../constants/formFields";
import { formTitleParser } from "../helpers/formParser";
import { fieldValidator } from "../components/form/formValidator";
import FormField from "../components/form/FormField";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const [form, setForm] = useState();

  useEffect(() => {
    let initialForm = {};
    for (let i = 0; i < (isSignIn ?  loginForm : isForgetPassword ? forgetPasswordForm : registerForm).length; i++) {
      initialForm[(isSignIn ?  loginForm : isForgetPassword ? forgetPasswordForm : registerForm)[i].title] = {
        value: "",
        errorMessage: "",
      };
    }
    setForm(initialForm);
  }, [isSignIn, isForgetPassword]);

  const updateField = (key, value) => {
    let updatedForm = form;
    updatedForm[key].value = value;
    setForm(updatedForm);
  };

  return (
    <div className="flex flex-col w-screen gap-8">
      <PageHeader pageHeader={isSignIn ? "Sign In" : isForgetPassword ? "Forget Password" : "Register"} />
      <div className="flex justify-center gap-4 text-2xl font-semibold">
        <button
          onClick={() => {setIsSignIn(true); setIsForgetPassword(false); setForm()}}
          className={isSignIn ? "text-primary" : ""}
        >
          Sign In
        </button>
        <p className="font-normal">|</p>
        <button
          onClick={() => {setIsSignIn(false); setIsForgetPassword(false); setForm()}}
          className={!isSignIn && !isForgetPassword ? "text-primary" : ""}
        >
          Register
        </button>
      </div>
      <div className="w-full flex justify-center px-6">
        <form className="border rounded-lg grid gap-4 py-12 px-12 mb-12 w-full max-w-[36rem]">
          {form !== undefined &&
            (isSignIn ?  loginForm : isForgetPassword ? forgetPasswordForm : registerForm).map((field) => {
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
          <button
            onClick={() => {}}
            className="btn btn-main text-sm font-medium px-5 py-2 mt-4"
          >
            {isSignIn ? "Sign In" : isForgetPassword ? "Submit" : "Register"}
          </button>
          <button
          type="button"
            onClick={() => {setIsSignIn(false); setIsForgetPassword(true); setForm();}}
            className={isSignIn ? "text-sm font-medium px-5 py-2" : "hidden"}
          >
            Forgot Password?
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
