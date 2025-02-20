import React, { useEffect } from "react";
import { useAuth } from "../../Context/Context";
import Title from "../Title";

const Bestseller = () => {
  const { valuepr } = useAuth();
  const bestsellers = valuepr.products.filter((product) => product.bestseller);
  useEffect(() => {
    console.log(bestsellers);
  }, []);

  return (
    <div className="mt-10">
      <div className="text-center">
        <Title text1={"Latest"} text2={"Collection"} />
        <div className="flex w-full flex-row gap-10 items-center justify-evenly">
          <div className="w-[20vw] ml-2  h-[4px] bg-white"></div>
          <p className="text-white text-lg">
            The are the latete trends in our brand ald something something
          </p>
          <div className="w-[20vw] h-[4px] bg-white ab"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-4 gap-3 gap-y-6 p-[1rem]">
          {bestsellers.map((item, index) => (
            <div key={index}>
              <div className="bg-white shadow-md rounded-lg p-5">
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-full h-[200px] object-cover"
                />
                <h2 className="text-sm font-semibold mt-2">{item.name}</h2>
                <p className="text-sm text-gray-500">
                  {item.description?.slice(0, 80)}...
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Price: ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
