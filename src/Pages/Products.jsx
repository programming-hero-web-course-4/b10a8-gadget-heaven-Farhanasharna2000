import { useLoaderData } from "react-router-dom";
import Product from "../Components/Product";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Products = () => {
  const data = useLoaderData();
  const [products, setProducts] = useState(data);

  const handleSortByRating = () => {
    const sorted = [...products].sort((a, b) => b.rating - a.rating);
    setProducts(sorted);
  };

  return (
    <>
      <div className="flex justify-between items-center w-11/12 mx-auto">
      <Helmet>
        <title>Products | Gadget Heaven</title>
      </Helmet>
        <div>
          <h1 className="lg:text-3xl text-xl font-bold my-5">
            Sort Popular Products by Rating
          </h1>
        </div>
        <div className="space-x-4">
          <button onClick={handleSortByRating} className="btn btn-warning">
            Sort By Rating
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <Product key={idx} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;