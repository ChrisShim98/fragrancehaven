import React, { useState, useEffect, useLayoutEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ScrollToAnchor from "./helpers/ScrollToAnchor";

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
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return (
    <div className="overflow-x-hidden text-undertone font-Poppins min-w-[350px]">
      <Navbar display={scrollPosition > 200} />
      <div className={scrollPosition > 200 ? "h-24 flex w-full" : "hidden"} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
