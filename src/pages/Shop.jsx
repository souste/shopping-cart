import { useEffect, useState } from "react";
import "../styles.css";
import { getProducts } from "../api";
import { Link } from "react-router-dom";

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  // should I add an error here?

  return (
    <div className="shop-container">
      <h1 className="shop-title">Shop</h1>

      <ul className="products-container">
        {products.map((product) => {
          return (
            <Link key={product.id} to={`/products/${product.id}`}>
              <li className="product-container" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3 className="products-title">
                  {product.title.length > 65 ? `${product.title.substring(0, 65)}...` : product.title}
                </h3>
                <p>Category: {product.category}</p>
                <p>£{product.price}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default ShopPage;
