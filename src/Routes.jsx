import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MyNavbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Login from "./Pages/Forms/Login";
import Register from "./Pages/Forms/Register";
import ForgotPassword from "./Pages/Forms/ForgotPassword";
import Products from "./Pages/Products/Products";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ForgotPassword />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
