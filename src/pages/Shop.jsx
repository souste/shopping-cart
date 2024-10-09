import { useEffect, useState } from "react";
import "../styles.css";
import getProducts from "../api";

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
      <h1>Shop</h1>

      <ul className="products-container">
        {products.map((product) => {
          return (
            <li className="product-container" key={product.id}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
              <p>£{product.price}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShopPage;
