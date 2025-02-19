import React from "react";
import { useAuth } from "../Context/Context";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price, descri }) => {
  const { valuepr } = useAuth();

  return (
    <Link to={`/product/${id}`}>
      <div className="card hover:scale-105 transition-all bg-gray-100 hover:bg-black hover:text-white hover:border-2 hover:border-white text-black ease-out duration-300 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] h-[60vh] overflow-hidden shadow-xl rounded-lg">
        {/* Image Container */}
        <figure className="w-full h-[70%] overflow-hidden">
          <img src={image[0]} alt={name} className="w-full h-full object-cover" />
        </figure>
        {/* Text Content */}
        <div className="card-body p-4">
          <h2 className="font-semibold text-lg">{name}</h2>
          <p className="text-sm text-gray-500">{descri.slice(0, 80)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
