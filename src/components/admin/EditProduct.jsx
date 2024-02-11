import React, { useState, useEffect } from "react";
import FormField from "../../components/form/FormField";
import { fieldValidator } from "../../components/form/formValidator";
import { formTitleParser } from "../../helpers/formParser";
import { useDispatch, useSelector } from "react-redux";
import { openPopup, closePopup } from "../../redux/popupSlice";
import { setLoading, selectLoading } from "../../redux/loadingSlice";
import { PutEditProduct, PostSale } from "../../api/productRequests";
import { addProductForm } from "../../constants/adminFormFields";
import { FaRegWindowClose } from "react-icons/fa";

const EditProduct = ({
  product,
  setModalOpened = () => {},
  getAllProducts = () => {},
}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState();
  const loadingDetails = useSelector(selectLoading);

  const initializeForm = () => {
    let initialForm = {};
    for (let i = 0; i < addProductForm.length; i++) {
      if (addProductForm[i].title === "brandName") {
        initialForm[addProductForm[i].title] = {
          value: product.brand.name,
          errorMessage: "",
        };
      } else {
        initialForm[addProductForm[i].title] = {
          value: product[addProductForm[i].title],
          errorMessage: "",
        };
      }
    }
    setForm(initialForm);
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
      editProduct();
    } else {
      dispatch(setLoading(false));
    }
    setForm(() => {
      return updatedForm;
    });
  };

  const editProduct = async () => {
    // Construct product object
    let updatedProduct = {};
    for (let key in form) {
      if (key !== "salePercentage") {
        updatedProduct[key] = form[key].value;
      }
    }

    let response = await PutEditProduct(updatedProduct, product.id);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    } else {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response }));
      setModalOpened(false);
      await setDiscount(form["salePercentage"].value);
      getAllProducts();
    }
    dispatch(setLoading(false));
  };

  const setDiscount = async (salePercentage) => {
    let response = await PostSale(product.id, salePercentage);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    }
  };

  return (
    <div className="fixed w-screen h-screen grid place-items-center z-30 top-0 left-0 bg-[#000000a5] overflow-y-scroll">
      <div className="flex flex-col gap-4 items-start lg:items-center bg-gray-200 relative my-10 p-6 rounded-lg">
        <div
          onClick={() => {
            setModalOpened(false);
          }}
          className="absolute top-[1rem] right-[1rem] text-2xl hover:cursor-pointer hover:text-red-500"
        >
          <FaRegWindowClose />
        </div>
        <h1 className="font-medium text-xl sm:text-3xl pb-2 pt-4">
          Edit Product
        </h1>
        <span className="w-24 h-4 border-black border-t-2 pb-4" />
        <div className="flex flex-col gap-4">
          <form className="grid sm:grid-cols-2 gap-4 w-[75vw] sm:w-[85vw] lg:w-[50vw] text-sm lg:text-base max-w-[60rem]">
            {form !== undefined &&
              addProductForm.map((field) => {
                return (
                  <FormField
                    key={field.title}
                    keyValue={field.title}
                    value={
                      field.title === "brandName"
                        ? product.brand.name
                        : product[field.title]
                    }
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
          <button
            disabled={loadingDetails.loading}
            className={
              loadingDetails.loading
                ? "btn-disabled px-4 py-2 self-end"
                : "btn btn-main px-4 py-2 self-end"
            }
            type="button"
            onClick={() => {
              submitForm();
            }}
          >
            Edit Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
