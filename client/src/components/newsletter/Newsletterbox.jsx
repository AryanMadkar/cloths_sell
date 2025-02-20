import React from "react";

const Newsletterbox = () => {
  return (
    <div className="h-[36vh] w-[96vw] ml-4 rounded-2xl text-center text-black gap-2 bg-white mt-10 flex flex-col items-center justify-center p-8">
      <div>
        <h1 className="text-[2rem] font-bold">
          Stay up to date with our latest collections, exclusive offers, and
          exclusive promotions.
        </h1>
      </div>
      <div className="join text-white w-full">
        <input className="input input-bordered  w-full join-item" placeholder="Email" />
        <button className="btn join-item w-1/3 rounded-r-full">Subscribe</button>
      </div>
      <div>
        <p className="text-black textarea-md font-semibold ">
          We respect your privacy and will not share your email address with third parties.
        </p>
      </div>
    </div>
  );
};

export default Newsletterbox;
