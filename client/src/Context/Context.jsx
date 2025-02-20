import React, { createContext, useContext, useState, useEffect } from "react";
import { products } from "../../public/frontend_assets/assets";
import { useLocation } from "react-router-dom";
// Create Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [search, setSearch] = useState("")
  const [showsearch, setShowsearch] = useState(true)
  
  const currency = "$";
  const deleveryfee = 10;
  const valuepr = {
    products,
    currency,
    deleveryfee,
  };

  return (
    <AuthContext.Provider
      value={{ search,setSearch,showsearch,setShowsearch,valuepr, isSignedIn, user, setUser, setIsSignedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
