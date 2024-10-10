import "../styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../api";

function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  // Need to centre loading text

  const handleMinusClick = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const handlePlusClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    getSingleProduct(productId).then((product) => {
      setProduct(product);
      setLoading(false);
    });
  }, [productId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <li className="single-product-container">
        <img src={product.image} alt={product.title} />
        <div className="single-product-information">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <div className="quantity-increment">
            <button onClick={handleMinusClick}>-</button>
            <p>{count}</p>
            <button onClick={handlePlusClick}>+</button>
          </div>
          <p>£{product.price}</p>
          <button>Add to Cart</button>
        </div>
      </li>
    </div>
  );
}

export default SingleProduct;
