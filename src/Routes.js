import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hi There</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
