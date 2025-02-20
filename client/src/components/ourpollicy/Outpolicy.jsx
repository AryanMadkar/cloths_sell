import React from "react";
import { assets } from "../../../public/frontend_assets/assets";
const Outpolicy = () => {
  return (
    <div className="flex flex-row w-[96vw] rounded-2xl ml-4 h-[30vh] bg-white p-8 items-center justify-center gap-8">
      <div className="flex flex-col w-1/3 text-center text-black items-center justify-center gap-2">
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" />
        <h2 className="text-xl font-bold">Return & Exchange Policy</h2>
        <p className="text-sm text-black">
          Our store accepts returns and exchanges within 30 days. Please provide
          all necessary documents.
        </p>
      </div>
      <div className="flex flex-col w-1/3 text-center text-black items-center justify-center gap-2">
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" />
        <h2 className="text-xl font-bold">Quality Guarantee and Warranty</h2>
        <p className="text-sm text-black">
          Our store accepts returns and exchanges within 30 days. Please provide
          all necessary documents.
        </p>
      </div>
      <div className="flex flex-col w-1/3 text-center text-black items-center justify-center gap-2">
        <img src={assets.support_img} className="w-12 m-auto mb-5" />
        <h2 className="text-xl font-bold">Customer Service & Support Policy</h2>
        <p className="text-sm text-black">
          Our store accepts returns and exchanges within 30 days. Please provide
          all necessary documents.
        </p>
      </div>
    </div>
  );
};

export default Outpolicy;
