import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";

 import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";


function App() {
  return (
    <>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/nproducts/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
        <ToastContainer />
    </>
      );
}

export default App;
