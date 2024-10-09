import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NavBar from "./NavBar";
import About from "./pages/About";
import SingleProduct from "./SingleProduct.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="products/:productId" element={<SingleProduct />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
