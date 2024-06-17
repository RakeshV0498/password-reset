import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MyNavbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Login from "./Pages/Forms/Login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
