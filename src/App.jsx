import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";
import AllProducts from "./pages/AllProducts";
import store from "./redux/store";
import { Provider } from "react-redux";

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
    <Provider store={store}>
      <div className="overflow-x-hidden text-undertone font-Poppins min-w-[350px]">
        <Navbar display={scrollPosition > 200} />
        <div className={scrollPosition > 200 ? "h-24 flex w-full" : "hidden"} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/productDetails/*" element={<ProductDetails />} />
          <Route path="/allProducts" element={<AllProducts />} />
        </Routes>
        <Footer />
        <ScrollToTop display={scrollPosition > 200} toTop={toTop} />
      </div>
    </Provider>
  );
}

export default App;
