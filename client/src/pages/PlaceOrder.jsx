import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { assets } from "../../public/frontend_assets/assets";
import { useAuth } from "../Context/Context";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const [method, setmethod] = useState("cod")
    const { cart, valuepr } = useAuth();
    const navigate = useNavigate("/order")
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <FaShoppingCart /> Place Order
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Delivery Information */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Delivery <span className="text-black">Information</span></h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="input-field" />
              <input type="text" placeholder="Last name" className="input-field" />
            </div>
            <input type="email" placeholder="Email address" className="input-field" />
            <input type="text" placeholder="Street" className="input-field" />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="City" className="input-field" />
              <input type="text" placeholder="State" className="input-field" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Zipcode" className="input-field" />
              <input type="text" placeholder="Country" className="input-field" />
            </div>
            <input type="text" placeholder="Phone" className="input-field" />
          </form>
        </div>

        {/* Cart Totals & Payment */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Cart <span className="text-black">Totals</span></h2>
          <div className="border p-4 rounded-md shadow-md bg-white">
            <div className="flex justify-between py-2 border-b">
              <span>Subtotal</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Shipping Fee</span>
              <span>$10.00</span>
            </div>
            <div className="flex justify-between py-2 font-bold text-lg">
              <span>Total</span>
              <span>$0.00</span>
            </div>
          </div>

          {/* Payment Methods */}
          <h3 className="mt-6 text-lg font-semibold">Payment Method</h3>
          <div className="flex gap-4 mt-2">
            <label   onClick={()=>setmethod("stripe")} className={`${method==="stripe"?"border-green-500":"border-white"}  payment-option border-2`}>
              <img src={assets.stripe_logo}/>
            </label>
            <label  onClick={()=>setmethod("razorpay")} className={`${method==="razorpay"?"border-green-500":"border-white"}  payment-option border-2`}>
             <img src={assets.razorpay_logo}/>
            </label>
            <label onClick={()=>setmethod("cod")}  className={`${method==="cod"?"border-green-500":"border-white"}  payment-option border-2`}>
              <span className="ml-2">Cash on Delivery</span>
            </label>
          </div>

          {/* Submit Button */}
          <button className="w-full  mt-6 bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800 transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
