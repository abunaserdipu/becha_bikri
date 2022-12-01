import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProducts from "./components/products/AddProducts";
import Navbar from "./components/header/Navbar";
import ProductDetails from "./components/products/ProductDetails";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import ConfirmOrder from "./components/order/ConfirmOrder";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/product/details" element={<ProductDetails />} />
          <Route path="/checkout/register" element={<Register />} />
          <Route path="/checkout/login" element={<Login />} />
          <Route path="/checkout/order" element={<ConfirmOrder />} />
          <Route exact path="/addproduct" element={<AddProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
