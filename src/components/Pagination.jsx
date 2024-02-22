import React from "react";
import { scrollToTop } from "../helpers/scrollToTop";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ pagination, getAllProducts, searchDetails }) => {
  const setPaginationButtons = () => {
    const buttons = [];
    let startingButton;

    if (pagination.totalPages <= 5 || pagination.currentPage <= 3) {
      // Show first 5 buttons if there are 5 or fewer pages or if we are on the first 3 pages
      startingButton = 1;
    } else if (pagination.currentPage >= pagination.totalPages - 2) {
      // Show the last 5 buttons if we are within the last 3 pages
      startingButton = pagination.totalPages - 4;
    } else {
      // Show the current page and the 4 preceding pages
      startingButton = pagination.currentPage - 2;
    }

    // Return to first page button
    if (pagination.currentPage >= 4 && pagination.totalPages > 5) {
      buttons.push(
        <button
          type="button"
          onClick={() => {
            if (searchDetails.isActive) {
              getAllProducts(1, searchDetails.query);
            } else {
              getAllProducts(1);
            }
            scrollToTop();
          }}
          key="firstPage"
          className="btn btn-main h-8 w-8 flex items-center justify-center"
        >
          <FaArrowLeft />
        </button>
      );
    }

    for (
      let i = startingButton;
      i < startingButton + 5 && i <= pagination.totalPages;
      i++
    ) {
      buttons.push(
        <button
          type="button"
          onClick={() => {
            if (searchDetails.isActive) {
              getAllProducts(i, searchDetails.query);
            } else {
              getAllProducts(i);
            }
            scrollToTop();
          }}
          disabled={pagination.currentPage === i}
          key={i}
          className={
            pagination.currentPage === i
              ? "btn-disabled h-8 w-8 flex items-center justify-center"
              : "btn btn-main h-8 w-8 flex items-center justify-center"
          }
        >
          {i}
        </button>
      );
    }

    // Go to last page button
    if (
      pagination.currentPage <= pagination.totalPages - 3 &&
      pagination.totalPages > 5
    ) {
      buttons.push(
        <button
          type="button"
          onClick={() => {
            if (searchDetails.isActive) {
              getAllProducts(pagination.totalPages, searchDetails.query);
            } else {
              getAllProducts(pagination.totalPages);
            }
            scrollToTop();
          }}
          key="lastPage"
          className="btn btn-main h-8 w-8 flex items-center justify-center"
        >
          <FaArrowRight />
        </button>
      );
    }

    return buttons;
  };
  return <div className="flex gap-2 py-12">{setPaginationButtons()}</div>;
};

export default Pagination;
