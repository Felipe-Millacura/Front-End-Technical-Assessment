import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Products from "../pages/products";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}