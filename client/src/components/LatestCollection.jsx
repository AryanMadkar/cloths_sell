import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/Context";
import Title from "./Title";
import Productitem from "./Productitem";

const LatestCollection = () => {
  const { valuepr } = useAuth();
  const [latestproduct, setLatestproduct] = useState([])
  useEffect(() => {
    setLatestproduct(valuepr.products.slice(0,12));
    console.log(valuepr);
  }, []);
  return (
    <div className="mt-10">
      <div className="text-center">
        <Title text1={"Latest"} text2={"Collection"}/>
        <div className="grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-4 gap-3 gap-y-6 p-[1rem]">
          {latestproduct.map((item,index) =>(
            <Productitem key={index}  id={item._id} name={item.name} image={item.image} price={item.price} descri={item.description
            }/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
