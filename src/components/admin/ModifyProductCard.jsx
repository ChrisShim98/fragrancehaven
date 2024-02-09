import React, { useState } from "react";
import {
  FaStar,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaPencilAlt,
  FaCamera,
} from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { priceParse, dateParse, parseRating } from "../../helpers/formParser";

const ModifyProductCard = ({
  product,
  deleteProduct = () => {},
  deletePhoto = () => {},
  setEditModalOpened = () => {},
  setPhotoModalOpened = () => {},
  setProductToEdit = () => {},
  setMainPhoto = () => {},
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const editProduct = () => {
    setProductToEdit(product);
    setEditModalOpened(true);
  };

  const addPhoto = () => {
    setProductToEdit(product);
    setPhotoModalOpened(true);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 py-4">
      <div className="flex flex-col items-center py-8 gap-4">
        <div className="grid grid-cols-6 place-items-center gap-4 text-3xl relative">
          <button
            disabled={currentImage === 0}
            onClick={() => {
              setCurrentImage(currentImage - 1);
            }}
            className={
              currentImage === 0
                ? "col-span-1 text-gray-300"
                : "col-span-1 link"
            }
          >
            <FaArrowAltCircleLeft />
          </button>

          <img
            src={
              product.photos.length > 0
                ? product.photos[currentImage].url
                : "/noImage.png"
            }
            className="w-full relative col-span-4"
            alt={product.name}
          />

          <button
            disabled={
              currentImage === product.photos.length - 1 ||
              product.photos.length === 0
            }
            onClick={() => {
              setCurrentImage(currentImage + 1);
            }}
            className={
              currentImage === product.photos.length - 1 ||
              product.photos.length === 0
                ? "col-span-1 text-gray-300"
                : "col-span-1 link"
            }
          >
            <FaArrowAltCircleRight />
          </button>
          <button
            onClick={() => {
              deletePhoto(product.id, currentImage);
            }}
            className={
              product.photos.length > 0 && !product.photos[currentImage].isMain
                ? "absolute top-0 sm:top-[20%] right-[10%] sm:right-[20%] z-10 text-xl sm:text-2xl bg-white rounded-full shadow-md hover:shadow-xl hover:text-primary duration-1000 p-2"
                : "hidden"
            }
          >
            <ImBin />
          </button>
        </div>
        {product.photos.length > 0 && <div className="flex items-center gap-1">
          <input
            disabled={product.photos[currentImage].isMain}
            onChange={() => {
              setMainPhoto(product.id, currentImage);
            }}
            checked={product.photos[currentImage].isMain}
            type="checkbox"
          />
          <p className="text-sm">Is main photo?</p>
        </div>}
      </div>

      <div className="flex flex-col sm:pr-4">
        <div className="flex flex-col border-b border-gray-200 py-4">
          <h2 className="text-2xl font-medium">{product.name}</h2>
          <h2 className="text-xl font-medium">${priceParse(product.price)}</h2>
          <div className="flex gap-1 items-center">
            <FaStar className="text-yellow-300 relative top-[-1px]" />
            <h2>{parseRating(product.reviews)}</h2>
          </div>
          <p className="py-4">{product.description}</p>
          <div className="grid grid-cols-3">
            <p>Brand: </p>
            <p className="col-span-2">{product.brand.name}</p>
            <p>Scent: </p>
            <p className="col-span-2">{product.scent}</p>
            <p>In Stock: </p>
            <p className="col-span-2">{product.stock}</p>
            <p>Date Added: </p>
            <p className="col-span-2">{dateParse(product.dateAdded)}</p>
            <p>Amount Sold: </p>
            <p className="col-span-2">{product.amountSold}</p>
          </div>
        </div>
        <div className="flex flex-col"></div>
        <div className="flex flex-wrap gap-4 py-6">
          <button
            onClick={() => {
              editProduct();
            }}
            className="btn btn-main text-sm font-medium px-5 py-2 flex gap-1 items-center"
          >
            <FaPencilAlt className="relative top-[-1.2px]" />
            Edit
          </button>
          <button
            onClick={() => {
              deleteProduct(product.id);
            }}
            className="btn btn-main text-sm font-medium px-5 py-2 flex gap-1 items-center"
          >
            <ImBin className="relative top-[-1.2px]" />
            Delete
          </button>
          <button
            onClick={() => {
              addPhoto();
            }}
            className="btn btn-main text-sm font-medium px-5 py-2 flex gap-1 items-center"
          >
            <FaCamera className="relative top-[-1.2px]" />
            Add Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModifyProductCard;
