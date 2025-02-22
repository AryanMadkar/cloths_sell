import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/Context";
import { Link } from "react-router-dom";

const MoreProducts = ({ category, subcategory }) => {
  const { valuepr } = useAuth();
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (valuepr?.products?.length > 0) {
      let productsCopy = valuepr?.products.filter(
        (item) => category === item.category && subcategory === item.subCategory
      );

      setRelated(productsCopy.slice(0, 6));
      console.log(productsCopy);
    } else {
      console.log("No related products found");
    }
  }, [valuepr, category, subcategory]);

  return (
    <div>
      <section className="text-gray-100 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-100 font-medium title-font text-2xl mb-2 sm:mb-0">
                Related Products
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {related?.map((product, index) => (
              <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt={product.name}
                    className="object-cover object-center h-full w-full"
                    src={product.image?.[0] || "https://dummyimage.com/400x400"}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-100 mt-5">
                  {product.name}
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  {product.description}
                </p>
                <div className="flex flex-row items-center justify-between mx-4">
                  {" "}
                  <Link
                    to={`/product/${product._id}`}
                    className="text-indigo-500 inline-flex items-center mt-3"
                  >
                    <button className="btn btn-active btn-accent">
                      Explore
                    </button>
                  </Link>
                  <div>
                    <h1>₹{product?.price}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreProducts;
