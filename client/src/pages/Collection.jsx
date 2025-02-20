import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/Context";
import Title from "../components/Title";
import ProductItem from "../components/Productitem";
const Collection = () => {
  const { valuepr } = useAuth();
  const [fileterproducts, setFileterproducts] = useState([]);
  const [catageory, setCatageory] = useState([]);
  const [subcat, setSubcat] = useState([]);
  const [sortType, setSortType] = useState("");
  
  const togglecategeory = (e) => {
    if (catageory.includes(e.target.value)) {
      setCatageory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCatageory((prev) => [...prev, e.target.value]);
    }
  };
  const togglesubcategeory = (e) => {
    if (subcat.includes(e.target.value)) {
      setSubcat((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubcat((prev) => [...prev, e.target.value]);
    }
  };

  let applyfileter = () => {
    let productscopy = valuepr.products.slice();
    if (catageory.length > 0) {
      productscopy = productscopy.filter((product) =>
        catageory.includes(product.category)
      );
    }
    if (subcat.length > 0) {
      productscopy = productscopy.filter((product) =>
        subcat.includes(product.subCategory)
      );
    }
    setFileterproducts(productscopy);
  };
  useEffect(() => {
    applyfileter();
  }, [catageory, subcat]);

  const sortproduct = () => {
    let productscopy = fileterproducts.slice();
    switch (sortType) {
      case "low-high":
        setFileterproducts(productscopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFileterproducts(productscopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyfileter();
        break;
    }
  };
  useEffect(()=>{
    sortproduct()
  },[sortType])

  return (
    <div className="min-h-[100vh] h-full flex flex-row items-start justify-center w-full">
      <div className="w-1/4 p-2 min-h-[100vh] flex flex-col items-start justify-start text-black gap-2 bg-gray-100 h-full">
        <h1 className="text-[1.6rem] font-thin">FILTERS</h1>
        <div
          className={`border-2 rounded-2xl w-fu5ll p-8 flex flex-col items-start justify-start gap-2`}
        >
          <h1 className="text-xl font-bold">CATEGORIES</h1>
          <div className="flex flex-col w-full items-center justify-start gap-2">
            <div className="flex flex-row gap-2 items-center w-full justify-start">
              {" "}
              <input
                type="checkbox"
                value={"Men"}
                className="p-2"
                id="MENS"
                name="mens"
                onChange={togglecategeory}
              />
              <label className="text-lg font-semibold" htmlFor="mens">
                MENS
              </label>
            </div>
            <div className="flex flex-row gap-2 items-center w-full justify-start">
              <input
                type="checkbox"
                className="p-2"
                id="womens"
                name="womens"
                value={"Women"}
                onChange={togglecategeory}
              />
              <label className="text-lg font-semibold" htmlFor="womens">
                WOMENS
              </label>
            </div>
            <div className="flex flex-row gap-2 items-center w-full justify-start">
              <input
                type="checkbox"
                className="p-2"
                id="childrens"
                name="childrens"
                value={"Kids"}
                onChange={togglecategeory}
              />
              <label className="text-lg font-semibold" htmlFor="childrens">
                CHILDRENS
              </label>
            </div>
          </div>
        </div>
        <div
          className={`border-2 rounded-2xl w-fu5ll p-8 flex flex-col items-start justify-start gap-2`}
        >
          <h1 className="text-xl font-bold">TYPE</h1>
          <div className="flex flex-col w-full items-center justify-start gap-2">
            <div className="flex flex-row gap-2 items-center w-full justify-start">
              {" "}
              <input
                type="checkbox"
                className="p-2"
                value={"Topwear"}
                onChange={togglesubcategeory}
              />
              <label className="text-lg font-semibold" htmlFor="mens">
                TOPWEARS
              </label>
            </div>
            <div className="flex flex-row gap-2 items-center w-full justify-start">
              <input
                type="checkbox"
                className="p-2"
                value={"Bottomwear"}
                onChange={togglesubcategeory}
              />
              <label className="text-lg font-semibold" htmlFor="womens">
                BOTTOMWEAR
              </label>
            </div>
            <div className="flex flex-row gap-2 items-center w-full justify-start">
              <input
                type="checkbox"
                className="p-2"
                value={"Winterwear"}
                onChange={togglesubcategeory}
              />
              <label className="text-lg font-semibold" htmlFor="childrens">
                WINTERWEAR
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full p-8  min-h-[100vh] flex flex-col items-start justify-start gap-4">
        <Title text1={"ALL"} text2={"COLLECTIONS"} />
        <select onChange={(e)=>setSortType(e.target.value)} className="select select-ghost w-full max-w-xs">
          <option value={"relavent"}>Sort by: Relavent</option>
          <option value={"low-high"}>Sort by: Low to High</option>
          <option value={"high-low"}>Sort by: High to Low</option>
        </select>
        <div className="grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-4 gap-3 gap-y-6 p-[1rem]">
          {fileterproducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
              descri={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
