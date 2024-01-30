import { topBrands } from "../constants/colognes.jsx";

const TopFragrance = () => {
  return (
    <div className="bg-gray-100 w-screen flex flex-col place-items-center py-24">
      <div className="grid place-items-center justify-center h-full gap-12">
        <h1 className="text-3xl font-medium">Top Cologne Brands</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center  pt-8 lg:pt-0">
          {topBrands.map((brand, index) => {
            return (<div key={brand + index} className="flex place-items-center w-[20rem] pr-6 py-2 rounded-md hover:scale-105 duration-300 ease-in-out bg-white shadow-md">
              <img src={brand.img} className="h-32 w-32 p-2" alt={brand} />
              <h1>{brand.brand}</h1>
            </div>)
          })}
        </div>
      </div>
    </div>
  );
};

export default TopFragrance;
