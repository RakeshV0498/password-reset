import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MyNavbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
