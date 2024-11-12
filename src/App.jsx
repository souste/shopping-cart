import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NavBar from "./NavBar";
import Footer from "./Footer";
import About from "./pages/About";
import Cart from "./pages/Cart.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "@fontsource/literata";

function App() {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  const handleCartClick = (title, price, id, image) => {
    setCart((prevCart) => [...prevCart, { title, price, id, image, quantity }]);
    setQuantity(1);
  };

  useEffect(() => {
    console.log("cart updated", cart);
  }, [cart]);

  const handleCartChange = (newCartLength) => {
    console.log(`Cart has ${newCartLength} items`);
  };

  return (
    <div className="app-container">
      <NavBar cart={cart} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route
            path="products/:productId"
            element={<SingleProduct handleCartClick={handleCartClick} quantity={quantity} setQuantity={setQuantity} />}
          />
          <Route path="/cart" element={<Cart cart={cart} onCartChange={handleCartChange} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
