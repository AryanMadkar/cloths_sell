import React from "react";
import { assets } from "../../../public/frontend_assets/assets";
const Hero = () => {
  return (
    <div className="flex flex-row items-center overflow-hidden rounded-2xl justify-center w-[80vw] border-t-2 border-purple-800 mt-10 bg-gray-100 h-[80vh]">
      <div className="w-1/2 text-black bg-gray-100 h-full flex items-center justify-center gap-4 flex-col">
        <div className="flex flex-row items-center justify-end w-[21rem] gap-4">
          <div className="w-[3rem] h-[2px] bg-black "></div>
          <h1 className="text-[1.6rem] font-thin">OUR BESTSELLER</h1>
        </div>
        <h1 className="text-[3rem] font-bold">Latest Arrivals</h1>
        <div className="flex flex-row items-center justify-start w-[21rem] gap-4">
          <h1 className="text-[1.6rem] font-extralight">SHOP NOW</h1>
          <div className="w-[6rem] h-[2px] bg-black "></div>
        </div>
      </div>
      <div className="w-1/2 text-black h-full flex items-center  justify-center flex-col">
        <img src={assets.hero_img} className="h-full" />
      </div>
    </div>
  );
};

export default Hero;
