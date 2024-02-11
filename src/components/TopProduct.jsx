const TopProduct = ({ products }) => {
  return (
    <div className="bg-gray-100 w-screen flex flex-col place-items-center py-24">
      <div className="grid place-items-center justify-center h-full gap-12">
        <h1 className="text-3xl font-medium">Top Brands</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center pt-8 lg:pt-0">
          {products.slice(0, 6).map((product, index) => {
            return (
              <div
                key={product.brand.name + index}
                className="grid grid-cols-5 items-center w-[20rem] pr-6 py-2 rounded-md hover:scale-105 duration-300 ease-in-out bg-white shadow-md"
              >
                <img src={product.photos[0].url} className="col-span-2 p-2" alt={product.brand.name} />
                <h1 className="col-span-3">{product.brand.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
