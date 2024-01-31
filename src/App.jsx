import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";
import AllProducts from "./pages/AllProducts";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  const { pathname } = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const toTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="overflow-x-hidden text-undertone font-Poppins min-w-[350px]">
      <Navbar display={scrollPosition > 200} />
      <div className={scrollPosition > 200 ? "h-24 flex w-full" : "hidden"} />
      <div className="min-h-[80vh]">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/productDetails/*" element={<ProductDetails />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      </div>
      
      <Footer />
      <ScrollToTop display={scrollPosition > 200} toTop={toTop} />
    </div>
  );
}

export default App;
