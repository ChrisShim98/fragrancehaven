import React from "react";
import { FaStar } from "react-icons/fa";
import { dateParse } from "../helpers/formParser";
import { useApiCallFunctions } from "../helpers/customHooks/ApiCallFunctions";

const Reviews = ({ reviews = [], productId, loadPage }) => {
  const { deleteReview } = useApiCallFunctions();
  let adminCheck =
    localStorage.getItem("role") !== null &&
    localStorage.getItem("role") === "Admin";

  return (
    <div className="col-span-2 flex flex-col items-center gap-2 sm:px-4 text-center place-self-center text-sm md:text-base">
      <h2 className="font-medium text-xl sm:text-2xl pb-2">Reviews</h2>
      <span className="w-12 h-1 border-black border-t-2 pb-4" />
      {reviews.length === 0 ? (
        <p>This product has no reviews as yet.</p>
      ) : (
        <div className="grid gap-8">
          {reviews.map((review) => {
            return (
              <div
                className="grid grid-cols-2 max-w-[35 rem] rounded-lg gap-2 place-items-start border-b-[1px] pb-4 px-4 text-start"
                key={review.id}
              >
                <p>Username:</p>
                <p>{review.reviewerName}</p>
                <p className={review.message === "" ? "hidden" : ""}>Review:</p>
                <p className={review.message === "" ? "hidden" : ""}>
                  {review.message}
                </p>
                <p>Rating:</p>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                      <FaStar
                        key={index + review.reviewerName}
                        color={
                          starValue <= review.rating ? "#ffc107" : "#e4e5e9"
                        }
                        size={18}
                      />
                    );
                  })}
                </div>
                <p>Date Posted:</p>
                <p>{dateParse(review.dateAdded)}</p>
                {adminCheck && (
                  <div className="flex w-full justify-end col-span-2">
                    <button
                      onClick={async () => {
                        await deleteReview(productId, review.id);
                        loadPage();
                      }}
                      className="bg-red-500 rounded-lg text-white p-2 hover:bg-red-600 transition-colors duration-500"
                    >
                      Delete Review
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Reviews;
