import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearch, selectSearch } from "../redux/searchSlice";
import { IoIosClose } from "react-icons/io";

const Filter = () => {
  const dispatch = useDispatch();
  const searchDetails = useSelector(selectSearch);

  const clearSearch = () => {
    dispatch(
      setSearch({
        query: "",
        isActive: false,
      })
    );
  };

  return (
    <div className="flex flex-col items-start gap-2 px-4 text-sm sm:text-base rounded-lg bg-gray-100 p-6">
      <h2 className="font-medium self-center">Filters</h2>
      <span className="w-12 border-black border-t-[1px] pb-4 self-center" />
      {searchDetails.isActive && (
        <button
          className="hover:text-primary flex gap-1 items-center"
          onClick={() => {
            clearSearch();
          }}
        >
          <p>Clear Search</p>
          <IoIosClose size={20} />
        </button>
      )}
      <div>
        <p>On Sale</p>
      </div>
      <div>
        <p>New</p>
      </div>
      <div>
        <p>In Stock</p>
      </div>
    </div>
  );
};

export default Filter;
