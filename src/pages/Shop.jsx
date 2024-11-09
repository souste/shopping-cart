import { useEffect, useState } from "react";
import "../styles.css";
import { getProducts } from "../api";
import { Link } from "react-router-dom";
import allProductsPhoto from "../assets/all-products-photo.jpg";
import womensClothingPhoto from "../assets/womens-clothing.jpg";
import mensClothingPhoto from "../assets/mens-clothing.jpg";
import electronicsPhoto from "../assets/electronics-photo.jpg";
import jeweleryPhoto from "../assets/jewelery-photo.jpg";

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [activeCategoryPhoto, setActiveCategoryPhoto] = useState(allProductsPhoto);
  const [activeCategoryTitle, setActiveCategoryTitle] = useState("All products");
  const [activeCategoryText, setActiveCategoryText] = useState(
    "Discover a world of possibilities with our extensive range of products. From stylish fashion and elegant jewelry to cutting-edge electronics, find everything you need in one place."
  );

  const categories = ["women's clothing", "men's clothing", "electronics", "jewelery"];

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
      setLoading(false);
    });
    switch (selectedCategory) {
      case "":
        setActiveCategoryPhoto(allProductsPhoto);
        setActiveCategoryTitle("All Products");
        setActiveCategoryText(
          "Discover a world of possibilities with our extensive range of products. From stylish fashion and elegant jewelry to cutting-edge electronics, find everything you need in one place."
        );
        break;
      case "women's clothing":
        setActiveCategoryPhoto(womensClothingPhoto);
        setActiveCategoryTitle("Women's Clothing");
        setActiveCategoryText(
          "Discover the latest women's fashion trends. From casual wear to elegant evening dresses, find your perfect style."
        );
        break;
      case "men's clothing":
        setActiveCategoryPhoto(mensClothingPhoto);
        setActiveCategoryTitle("Men's Clothing");
        setActiveCategoryText(
          "Effortless style meets modern design. Explore our collection of men's clothing, from classic essentials to contemporary trends."
        );
        break;
      case "electronics":
        setActiveCategoryPhoto(electronicsPhoto);
        setActiveCategoryTitle("Electronics");
        setActiveCategoryText(
          "Stay connected and powered up with our range of electronics. Discover the latest gadgets, from smartphones to smartwatches, and everything in between."
        );
        break;
      case "jewelery":
        setActiveCategoryPhoto(jeweleryPhoto);
        setActiveCategoryTitle("Jewelery");
        setActiveCategoryText(
          "Adorn yourself with exquisite jewelry. From delicate necklaces to bold statement pieces, find the perfect accessory to complement your style."
        );
        break;
    }
  }, [selectedCategory]);

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
          <div className="shop-banner">
            <div className="shop-banner-title-description">
              <h2 className="shop-banner-title">{activeCategoryTitle}</h2>
              <p className="shop-banner-description">{activeCategoryText}</p>
            </div>
            <img src={activeCategoryPhoto} alt="shop-banner-woman-handbag" />
          </div>
          <ul className="products-container">
            {products.map((product) => {
              const displayProduct = selectedCategory === "" || product.category === selectedCategory;
              return (
                displayProduct && (
                  <Link key={product.id} to={`/products/${product.id}`}>
                    <li className="product-container" key={product.id}>
                      <p className="product-price">£{product.price}</p>
                      <img src={product.image} alt={product.title} />
                      <h3 className="products-title">
                        {product.title.length > 65 ? `${product.title.substring(0, 65)}...` : product.title}
                      </h3>
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
