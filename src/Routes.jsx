import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MyNavbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Login from "./Pages/Forms/Login";
import Register from "./Pages/Forms/Register";
import ForgotPassword from "./Pages/Forms/ForgotPassword";
import Products from "./Pages/Products/Products";
import PasswordReset from "./Pages/Forms/PasswordReset";
import NoMatch from "./Pages/NoMatch";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<PasswordReset />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
