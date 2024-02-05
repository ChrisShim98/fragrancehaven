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
import SignIn from "./pages/SignIn";
import FAQs from "./pages/FAQs";
import Popup from "./components/Popup";
import { useSelector } from "react-redux";
import { selectPopup } from "./redux/popupSlice";
import MyAccount from "./pages/MyAccount";
import ProtectedRoute from "./helpers/ProtectedRoute";
import RedirectRoute from "./helpers/RedirectRoute";
import AdminProtectedRoute from "./helpers/AdminProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const { pathname } = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const popupDetails = useSelector(selectPopup);

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
    <div className="overflow-x-hidden text-undertone font-Poppins min-w-[320px]">
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
          <Route
            path="/signIn"
            element={
              <RedirectRoute>
                <SignIn />
              </RedirectRoute>
            }
          />
          <Route path="/faqs" element={<FAQs />} />
          <Route
            path="/myAccount"
            element={
              <ProtectedRoute>
                <MyAccount />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminDashboard/*"
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            }
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      <Footer />
      <ScrollToTop display={scrollPosition > 200} toTop={toTop} />
      {popupDetails.isOn && <Popup />}
    </div>
  );
}

export default App;
