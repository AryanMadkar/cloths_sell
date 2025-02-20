import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/Context";
import { assets } from "../../public/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const Searchbar = () => {
    const location = useLocation()
    const [visible, setVisible] = useState(false)
    useEffect(()=>{
        
        if (location.pathname.includes("/collection" )){
          setVisible(true)
        }
        else{
          setVisible(false)
        }
      },[location])
  const { search, setSearch, showsearch, setShowsearch } = useAuth();
  return showsearch&&visible ? (
    <div className="border-b border-t bg-gray-100 fl5ex items-center justify-center text-center p-2">
      <div className="inline-flex gap-4 items-center justify-center text-xl font-semibold border border-black bg-black text-white p-2 w-3/4 rounded-full">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 text-white text-lg flex-1 outline-none bg-inherit"
          placeholder="Search"
        />
        <img src={assets.search_icon} className="w-10 bg-white rounded-xl hover:scale-105 transition-all ease-out duration-300 cursor-pointer border p-2 h-auto mr-4 " />
      </div>
      <img src={assets.cross_icon} className="inline hover:scale-105 transition-all ease-out duration-300 mx-4 border-2 p-2  rounded-full cursor-pointer h-[2.4rem] w-auto" onClick={()=>{
        setShowsearch(false)
      }}/>

    </div>
  ) : null;
};

export default Searchbar;
