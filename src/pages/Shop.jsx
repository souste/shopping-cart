import { useEffect, useState } from "react";
import "../styles.css";
import { getProducts } from "../api";
import { Link } from "react-router-dom";
import shopBannerPhoto from "../assets/shop-banner-photo.jpg";

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const categories = ["women's clothing", "men's clothing", "electronics", "jewelery"];

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category);
  };

  return (
    <div className="shop-container">
      {loading ? (
        <div className="loading-placeholder">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div className="shop-banner">
            <div className="shop-banner-title-description">
              <h2>All products</h2>
              <p className="shop-banner-description">
                Featuring all of our iconic store items. Shop here if this is where you want to blah blah blah
              </p>
              <p>Have more stuff here to fill the box....need to figure out what to say...</p>
            </div>
            <img src={shopBannerPhoto} alt="shop-banner-woman-handbag" />
          </div>
          <div className="categories-container">
            <ul className="categories-list">
              <li
                key="all"
                className={`categories-list-item ${selectedCategory === "" ? "active" : ""}`}
                onClick={() => handleCategoryChange("")}
              >
                all products
              </li>
              {categories.map((category) => (
                <li
                  key={category}
                  className={`categories-list-item ${activeCategory === category ? "active" : ""}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <ul className="products-container">
            {products.map((product) => {
              const displayProduct = selectedCategory === "" || product.category === selectedCategory;
              return (
                displayProduct && (
                  <Link key={product.id} to={`/products/${product.id}`}>
                    <li className="product-container" key={product.id}>
                      <img src={product.image} alt={product.title} />
                      <h3 className="products-title">
                        {product.title.length > 65 ? `${product.title.substring(0, 65)}...` : product.title}
                      </h3>
                      <p>£{product.price}</p>
                    </li>
                  </Link>
                )
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

export default ShopPage;
