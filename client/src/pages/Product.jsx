import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../Context/Context";
import MoreProducts from "./MoreProducts";
import { toast } from "react-toastify";

const Product = () => {
  const { productID } = useParams();
  const { valuepr, addToCart } = useAuth();
  const [productData, setProductData] = useState({});
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchdata = async () => {
      const product = valuepr?.products?.find(
        (item) => item?._id === productID
      );
      if (product) {
        setProductData(product);
        setMainImage(product.image[0]); // Set first image as main image
        setSelectedSize(product.sizes ? product.sizes[0] : ""); // Set default size
      }
    };

    fetchdata();
  }, [productID, valuepr]);

  return (
    <div>
      <section className="text-white body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Sidebar with Thumbnails */}
            <div className="w-1/6 flex flex-col items-center space-y-3">
              {productData.image?.slice(1).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 object-cover cursor-pointer border border-gray-300 hover:border-indigo-500 rounded-md"
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="w-1/2">
              <img
                alt="Product"
                className="w-full h-auto object-cover object-center rounded"
                src={mainImage || "https://dummyimage.com/400x400"}
              />
            </div>

            {/* Product Details */}
            <div className="lg:w-1/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-white tracking-widest">
                {productData.category}
              </h2>
              <h1 className="text-gray-100 text-3xl title-font font-medium mb-1">
                {productData.name}
              </h1>
              <p className="leading-relaxed">{productData.description}</p>

              {/* Size Selection */}
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                    >
                      {productData.sizes?.map((size, index) => (
                        <option key={index}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="flex items-center mb-5">
                <span className="mr-3">Quantity</span>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-16 border border-gray-300 rounded px-2 py-1 text-center text-white"
                />
              </div>

              {/* Price & Actions */}
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹{productData.price}
                </span>
                <button
                  onClick={() => {
                    toast.success(`Added ${productData.name} to cart`, {
                      position: "top-right",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                    addToCart(
                      selectedSize,
                      quantity,
                      productData._id,
                      productData.price
                    );
                  }}
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Add to Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MoreProducts
        category={productData.category}
        subcategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;
