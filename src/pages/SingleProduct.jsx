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

  const handleCartClick = () => {
    console.log("I'm being added to the card");
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
          <h3 className="single-product-title">{product.title}</h3>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <div className="quantity-increment">
            <button className="increment-button" onClick={handleMinusClick}>
              -
            </button>
            <p>{count}</p>
            <button className="increment-button" onClick={handlePlusClick}>
              +
            </button>
          </div>
          <p className="single-product-price">£{product.price}</p>
          <button className="addtocart-button" onClick={handleCartClick}>
            Add to Cart
          </button>
        </div>
      </li>
    </div>
  );
}

export default SingleProduct;
