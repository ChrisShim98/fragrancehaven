import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

const SearchBar = ({
  searchProducts,
  searchWord,
  setSearchWord,
  isAdmin = false,
  isMobile = false,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchProducts(searchWord);
      }}
      className={isMobile ? "flex relative" : "flex w-full lg:px-8 relative"}
    >
      <input
        type="text"
        onChange={(e) => setSearchWord(e.target.value)}
        value={searchWord}
        className={`rounded-md h-8 px-2 outline-1 outline ${
          isAdmin
            ? "w-full"
            : isMobile
            ? "w-[70vw] max-w-[50rem]"
            : "lg:w-[40vw] xl:w-[50vw] max-w-[50rem]"
        }`}
        placeholder="Search Products"
      />
      <div className="flex absolute top-0 right-0 lg:right-8">
        <div className="h-8 w-8 ">
          {searchWord !== "" && (
            <button
              type="button"
              onClick={async () => {
                setSearchWord("");
                searchProducts("");
              }}
              className="grid place-content-center h-8 w-8 bg-undertone text-white transition-colors duration-300 outline outline-1 outline-undertone hover:cursor-pointer hover:bg-primary hover:text-undertone"
            >
              <IoCloseOutline size={"1.5rem"} />
            </button>
          )}
        </div>

        <button
          type="submit"
          className="grid place-content-center bg-undertone text-white h-8 w-8 transition-colors duration-300 rounded-r-md outline outline-1 outline-undertone hover:cursor-pointer hover:bg-primary hover:text-undertone"
        >
          <BsSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
