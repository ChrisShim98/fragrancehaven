import { useSelector, useDispatch } from "react-redux";
import { setSearch, selectSearch } from "../redux/searchSlice";
import { IoIosClose } from "react-icons/io";

const Filter = ({
  productsWithReview,
  setProductsWithReview,
  productsOnSale,
  setProductsOnSale,
  productsInStock,
  setProductsInStock,
}) => {
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
      <div className="grid w-full gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
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
        <div className="flex gap-1">
          <input
            checked={productsOnSale}
            onChange={() => {
              setProductsOnSale(!productsOnSale);
            }}
            type="checkbox"
          />
          <p>On Sale</p>
        </div>
        <div className="flex gap-1">
          <input
            checked={productsWithReview}
            onChange={() => {
              setProductsWithReview(!productsWithReview);
            }}
            type="checkbox"
          />
          <p>With Reviews</p>
        </div>
        <div className="flex gap-1">
          <input
            checked={productsInStock}
            onChange={() => {
              setProductsInStock(!productsInStock);
            }}
            type="checkbox"
          />
          <p>In Stock</p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
