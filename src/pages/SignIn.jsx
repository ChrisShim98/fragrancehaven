import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import {
  loginForm,
  registerForm,
  forgetPasswordForm,
} from "../constants/formFields";
import { formTitleParser } from "../helpers/formParser";
import { fieldValidator } from "../components/form/formValidator";
import FormField from "../components/form/FormField";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, selectLoading } from "../redux/loadingSlice";
import { useApiCallFunctions } from "../helpers/customHooks/ApiCallFunctions";

const SignIn = () => {
  const dispatch = useDispatch();
  const loadingDetails = useSelector(selectLoading);
  const [isSignIn, setIsSignIn] = useState(true);
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const [form, setForm] = useState();
  const { signIn, register } = useApiCallFunctions();

  useEffect(() => {
    let initialForm = {};
    for (
      let i = 0;
      i <
      (isSignIn
        ? loginForm
        : isForgetPassword
        ? forgetPasswordForm
        : registerForm
      ).length;
      i++
    ) {
      initialForm[
        (isSignIn
          ? loginForm
          : isForgetPassword
          ? forgetPasswordForm
          : registerForm)[i].title
      ] = {
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

  const validateForm = (postFunction) => {
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
      postFunction();
    } else {
      dispatch(setLoading(false));
    }
    setForm(() => {
      return updatedForm;
    });
  };

  return (
    <div className="flex flex-col w-screen gap-8">
      <PageHeader
        pageHeader={
          isSignIn
            ? "Sign In"
            : isForgetPassword
            ? "Forget Password"
            : "Register"
        }
      />
      <div className="flex justify-center gap-4 text-2xl font-semibold">
        <button
          onClick={() => {
            setIsSignIn(true);
            setIsForgetPassword(false);
            setForm();
          }}
          className={isSignIn ? "text-primary" : ""}
        >
          Sign In
        </button>
        <p className="font-normal">|</p>
        <button
          onClick={() => {
            setIsSignIn(false);
            setIsForgetPassword(false);
            setForm();
          }}
          className={!isSignIn && !isForgetPassword ? "text-primary" : ""}
        >
          Register
        </button>
      </div>
      <div className="w-full flex justify-center px-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            isSignIn
              ? validateForm(() => {
                  signIn(form.username.value, form.password.value);
                })
              : validateForm(() =>
                  register(
                    form.username.value,
                    form.password.value,
                    form.email.value
                  )
                );
          }}
          className="border rounded-lg grid gap-4 py-12 px-4 text-sm sm:texgt-base sm:px-12 mb-12 w-full max-w-[36rem]"
        >
          {form !== undefined &&
            (isSignIn
              ? loginForm
              : isForgetPassword
              ? forgetPasswordForm
              : registerForm
            ).map((field) => {
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
            type="submit"
            disabled={loadingDetails.loading}
            className={
              loadingDetails.loading
                ? "btn-disabled text-sm font-medium px-5 py-2 mt-4"
                : "btn btn-main text-sm font-medium px-5 py-2 mt-4"
            }
          >
            {isSignIn ? "Sign In" : isForgetPassword ? "Submit" : "Register"}
          </button>
          <button
            type="button"
            onClick={() => {
              setIsSignIn(false);
              setIsForgetPassword(true);
              setForm();
            }}
            className={
              isSignIn ? "text-sm font-medium px-5 py-2 link" : "hidden"
            }
          >
            Forgot Password?
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
