import React, { createContext, useContext, useEffect, useState } from "react";
import { products } from "../../public/frontend_assets/assets";

// Create Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [showsearch, setShowsearch] = useState(true);
  const [cart, setCart] = useState([]); // State to store cart items
  const [subtotal, setSubtotal] = useState(0);

  const currency = "$";
  const deliveryFee = 10;
  const valuepr = {
    products,
    currency,
    deliveryFee,
  };

  // Function to add items to cart
  const addToCart = (size, quantity, productId, price) => {
    setCart((prevCart) => {
      // Check if the item already exists in the cart
      const existingItem = prevCart.find(
        (item) => item.productId === productId && item.size === size
      );

      if (existingItem) {
        // Update quantity if item already exists
        return prevCart.map((item) =>
          item.productId === productId && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item to the cart
        return [...prevCart, { productId, size, quantity, price }];
      }
    });
  };

  // Function to get the total count of items in the cart
  const getcartcount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  // Effect to calculate subtotal whenever cart changes
  useEffect(() => {
    const newSubtotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
  }, [cart]);

  const updatequantity = (productId, size, quantity) => {
    setCart((prevCart) => {
      if (quantity === 0) {
        // Remove the item from the cart if quantity is zero
        return prevCart.filter((item) => !(item.productId === productId && item.size === size));
      }
      
      // Update quantity otherwise
      return prevCart.map((item) =>
        item.productId === productId && item.size === size
          ? { ...item, quantity: quantity }
          : item
      );
    });
  };
  
  return (
    <AuthContext.Provider
      value={{
        updatequantity,
        subtotal,
        search,
        setSearch,
        showsearch,
        setShowsearch,
        valuepr,
        isSignedIn,
        user,
        setUser,
        setIsSignedIn,
        cart,
        addToCart, // Expose addToCart function
        getcartcount, // Expose getcartcount function
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
