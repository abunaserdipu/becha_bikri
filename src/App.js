import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProducts from "./components/products/AddProducts";
import Navbar from "./components/header/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route exact path="/addproduct" element={<AddProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
