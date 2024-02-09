import React, { useState } from "react";
import {
  FaRegHeart,
  FaStar,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { PostReview } from "../api/productRequests";
import { addProduct, editLiked } from "../redux/cartSlice";
import { setLoading } from "../redux/loadingSlice";
import { closePopup, openPopup } from "../redux/popupSlice";
import Reviews from "./Reviews";
import { priceParse, parseRating } from "../helpers/formParser";

const ProductDetailsCard = ({ product, isLiked = false }) => {
  const dispatch = useDispatch();
  let userLoggedIn = localStorage.getItem("token") !== null;
  const [currentImage, setCurrentImage] = useState(0);
  const [showReviewSection, setShowReviewSection] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);

  const addToCart = async () => {
    await dispatch(closePopup());
    dispatch(openPopup({ message: product.name + " added to cart" }));
    dispatch(addProduct(product));
  };

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  const resetReview = () => {
    setShowReviewSection(false);
    setReview("");
    setRating(1);
  };

  const submitReview = async () => {
    dispatch(setLoading(true));
    let productReview = {
      message: review,
      rating: rating,
      reviewerName: localStorage.getItem("username"),
    };

    let response = await PostReview(product.id, productReview);
    if (response?.error) {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response.message, isError: true }));
    } else {
      await dispatch(closePopup());
      dispatch(openPopup({ message: response }));
      resetReview();
    }
    dispatch(setLoading(false));
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 py-10 place-items-start">
      <div className="grid grid-cols-6 place-items-center gap-4 text-3xl relative col-span-2 md:col-span-1">
        <button
          disabled={currentImage === 0}
          onClick={() => {
            setCurrentImage(currentImage - 1);
          }}
          className={
            currentImage === 0 ? "col-span-1 text-gray-300" : "col-span-1 link"
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
      </div>
      <div className="flex flex-col sm:pr-8 col-span-2 md:col-span-1">
        <div className="flex flex-col border-b border-gray-200 py-4 mb-6 md:pr-4">
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
          </div>
        </div>
        <div className="flex flex-wrap gap-4 py-6">
          <button
            disabled={product.stock === 0}
            onClick={() => {
              addToCart(product);
            }}
            className={
              product.stock === 0
                ? "btn-disabled text-sm font-medium px-5 py-2"
                : "btn btn-main text-sm font-medium px-5 py-2"
            }
          >
            Add To Cart
          </button>
          <button
            onClick={() => {
              dispatch(editLiked(product));
            }}
            className={
              isLiked
                ? "bg-primary rounded-lg text-xl p-2"
                : "btn btn-main text-xl p-2"
            }
          >
            <FaRegHeart />
          </button>
          <button
            onClick={() => {
              setShowReviewSection(true);
            }}
            className={
              userLoggedIn && !showReviewSection
                ? "btn btn-main text-sm font-medium px-5 py-2"
                : "hidden"
            }
          >
            Add A Review
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitReview();
          }}
          className={showReviewSection ? "flex flex-col gap-6" : "hidden"}
        >
          <p>How was the product?</p>
          <textarea
            placeholder={"Add your review here..."}
            onChange={(e) => {
              setReview(e.target.value);
            }}
            className="rounded-lg border py-2 px-4 w-full"
            rows="4"
          />
          <p>What would your rating out of five be?</p>
          <div className="flex gap-4">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <FaStar
                  key={index}
                  onClick={() => handleStarClick(starValue)}
                  color={starValue <= rating ? "#ffc107" : "#e4e5e9"}
                  size={24}
                  style={{ cursor: "pointer" }}
                />
              );
            })}
            <p className="hidden sm:flex">{rating} out of 5 stars</p>
          </div>
          <button
            className="btn btn-main text-sm font-medium px-5 py-2 my-4"
            type="submit"
          >
            Submit Review
          </button>
        </form>
      </div>
      <span className="w-full col-span-2 border-gray-200 border-t-[1px]" />
      <Reviews reviews={product.reviews} />
    </div>
  );
};

export default ProductDetailsCard;
