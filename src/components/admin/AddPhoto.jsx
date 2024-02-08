import React, { useState } from "react";
import { PostAddPhotoToProduct } from "../../api/productRequests";
import { useDispatch, useSelector } from "react-redux";
import { openPopup, closePopup } from "../../redux/popupSlice";
import { setLoading, selectLoading } from "../../redux/loadingSlice";
import { FaRegWindowClose } from "react-icons/fa";

const AddPhoto = ({
  product,
  setModalOpened = () => {},
  getAllProducts = () => {},
}) => {
  const dispatch = useDispatch();
  const loadingDetails = useSelector(selectLoading);
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const previews = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        previews.push({ url: e.target.result, file });
        if (previews.length === files.length) {
          setFiles((prevPreviews) => [...prevPreviews, ...previews]);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (index) => {
    setFiles((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
  };

  const submit = async () => {
    if (files.length > 0) {
      dispatch(setLoading(true));
      for (let i = 0; i < files.length; i++) {
        await addProductImage(files[i].file);
      }
      await dispatch(closePopup());
      dispatch(openPopup({ message: "Success!" }));
      setModalOpened(false);
      getAllProducts();
      dispatch(setLoading(false));
    }
  };

  const addProductImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    let response = await PostAddPhotoToProduct(product.id, formData);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    }
  };

  return (
    <div className="fixed w-screen h-screen grid place-items-center z-30 top-0 left-0 bg-[#000000a5] overflow-y-scroll">
      <div className="flex flex-col gap-4 items-start lg:items-center bg-gray-200 relative mx-4 my-10 p-6 rounded-lg">
        <div
          onClick={() => {
            setModalOpened(false);
          }}
          className="absolute top-[1rem] right-[1rem] text-2xl hover:cursor-pointer hover:text-red-500"
        >
          <FaRegWindowClose />
        </div>
        <h1 className="font-medium text-xl sm:text-3xl pb-2 pt-4">
          Add Photos
        </h1>
        <span className="w-24 h-4 border-black border-t-2 pb-4" />
        <p>These photos will be added to {product.name}</p>
        <div className="flex flex-col gap-4">
          <form className="grid gap-4 w-[75vw] sm:w-[85vw] lg:w-[50vw] text-sm lg:text-base max-w-[60rem]">
            <div className="border rounded-lg py-12 sm:py-0 sm:mt-6 lg:mt-7 w-full">
              <input
                className="text-[#0000]"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center items-end">
                {files.map((preview, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <p className="text-sm">{preview.file.name}</p>
                    <div className="relative">
                      <img
                        src={preview.url}
                        alt={`Preview ${index + 1}`}
                        className="max-h-32"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteImage(index)}
                        className="absolute top-0 right-0 p-1 text-red-500 text-lg "
                      >
                        <FaRegWindowClose />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
              submit();
            }}
          >
            Add Photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPhoto;
