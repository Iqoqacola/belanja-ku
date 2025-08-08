import { Routes, Route, useLocation } from "react-router";

import { useEffect } from "react";

//layouts
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

//pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/Error";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isProduct = location.pathname === "/product";

  return (
    <>
      {!isProduct && <Navbar isProduct={isProduct} />}

      <div id="pages" className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
