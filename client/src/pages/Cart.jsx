import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/Context";
import LatestCollection from "../components/LatestCollection";
import { FcEmptyTrash } from "react-icons/fc";

const Cart = () => {
  const { cart, valuepr,updatequantity } = useAuth();
  const [cartdata, setCartdata] = useState([]);

  useEffect(() => {
    if (!cart || !valuepr?.products) return; // Prevent running when data is undefined
    setCartdata(cart);
  }, [cart, valuepr]);

  useEffect(() => {
    console.log("Updated cart data:", cartdata);
  }, [cartdata]); // Logs only when cartdata updates

  return (
    <div>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-white">
            Shopping Cart
          </h2>
          {cartdata.map((item, index) => {
            const product = valuepr?.products?.find(
              (product) => product._id === item.productId
            );
            console.log(product);

            return (
              <div
                key={item._id + item.size}
                className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4"
              >
                <div className="col-span-12 lg:col-span-2">
                  {product?.image && (
                    <img
                      src={product.image[0]}
                      alt={product.name || "Product image"}
                      className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"
                    />
                  )}
                </div>
                <div className="col-span-12 lg:col-span-10 lg:pl-3">
                  <div className="flex items-center justify-between w-full mb-4">
                    <h5 className="font-manrope font-bold text-2xl text-gray-900">
                      {product?.name || "Unknown Product"}
                    </h5>
                  </div>
                  <p className="text-gray-500 mb-6">
                    {product?.description || "No description available."}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <input
                        type="text"
                        className="border border-gray-200 rounded-full w-10 text-center"
                        placeholder={item.size}
                        readOnly
                      />
                      <input
                        type="text"
                        className="border border-gray-200 rounded-full w-10 text-center"
                        placeholder={item.quantity}
                        readOnly
                      />
                    </div>
                    <div onClick={() => updatequantity(item.productId, item.size,0)}>
                      <FcEmptyTrash className="text-[3rem] rounded-full bg-red-500 hover:scale-105 transition-all ease-out duration-300 cursor-pointer hover:bg-blue-600 p-2" />
                    </div>
                    <h6 className="text-indigo-600 font-bold text-2xl">
                      ${item.price.toFixed(2)}
                    </h6>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-200">
            <h5 className="text-gray-900 font-semibold text-2xl">Subtotal</h5>
            <h6 className="font-bold text-3xl text-indigo-600">
              ${cartdata.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
            </h6>
          </div>
          <div className="flex justify-center mt-10 w-full">
            <button className="text-white w-1/2 text-2xl font-bold btn btn-success border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>
      <LatestCollection />
    </div>
  );
};

export default Cart;
