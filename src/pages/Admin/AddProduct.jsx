import React, { useState, useEffect, useRef } from "react";
import FormField from "../../components/form/FormField";
import { addProductForm } from "../../constants/adminFormFields";
import { fieldValidator } from "../../components/form/formValidator";
import { formTitleParser } from "../../helpers/formParser";
import {
  PostAddProduct,
  PostAddPhotoToProduct,
  PostSale,
} from "../../api/productRequests";
import { useDispatch, useSelector } from "react-redux";
import { openPopup, closePopup } from "../../redux/popupSlice";
import { setLoading, selectLoading } from "../../redux/loadingSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState();
  const loadingDetails = useSelector(selectLoading);
  const [files, setFiles] = useState([]);
  const formRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  const initializeForm = () => {
    let initialForm = {};
    for (let i = 0; i < addProductForm.length; i++) {
      initialForm[addProductForm[i].title] = {
        value: "",
        errorMessage: "",
      };
    }
    setForm(initialForm);
    setFiles([]);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  useEffect(() => {
    initializeForm();
  }, []);

  const updateField = (key, value) => {
    let updatedForm = form;
    updatedForm[key].value = value;
    setForm(updatedForm);
  };

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
      addProduct();
    } else {
      dispatch(setLoading(false));
    }
    setForm(() => {
      return updatedForm;
    });
  };

  const addProduct = async () => {
    // Construct product object
    let product = {};
    for (let key in form) {
      if (key !== "salePercentage") {
        product[key] = form[key].value;
      }
    }
    let response = await PostAddProduct(product);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    } else {
      await dispatch(closePopup());
      await setDiscount(
        response.replace("Product saved. Id: ", ""),
        form["salePercentage"].value
      );
      dispatch(openPopup({ message: response }));
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          await addProductImage(
            response.replace("Product saved. Id: ", ""),
            files[i]
          );
        }
        initializeForm();
      } else {
        initializeForm();
      }
    }
    dispatch(setLoading(false));
  };

  const setDiscount = async (productId, salePercentage) => {
    let response = await PostSale(productId, salePercentage);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    }
  };

  const addProductImage = async (productId, file) => {
    const formData = new FormData();
    formData.append("file", file);
    let response = PostAddPhotoToProduct(productId, formData);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    }
  };

  return (
    <div className="flex flex-col gap-4 items-start lg:items-center">
      <h1 className="font-medium text-xl sm:text-3xl pb-2">Add Product</h1>
      <span className="w-24 h-4 border-black border-t-2 pb-4" />
      <div className="flex flex-col gap-4">
        <form
          className="grid sm:grid-cols-2 gap-4 w-[75vw] sm:w-[85vw] lg:w-[50vw] text-sm lg:text-base max-w-[60rem]"
          ref={formRef}
        >
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
          <div className="border rounded-lg py-12 sm:py-0 sm:mt-6 lg:mt-7 flex flex-wrap place-items-center justify-center">
            <input
              className="w-full"
              multiple
              type="file"
              onChange={handleFileChange}
            />
          </div>
          <button
            disabled={loadingDetails.loading}
            type="button"
            className={
              loadingDetails.loading
                ? "btn-disabled px-4 py-2 mt-8"
                : "btn btn-main px-4 py-2 mt-8"
            }
            onClick={() => {
              submitForm();
            }}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
