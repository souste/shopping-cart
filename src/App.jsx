import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NavBar from "./NavBar";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import getProducts from "./api";

getProducts();

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
