import "../styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../api";

function SingleProduct({ handleCartClick, quantity, setQuantity }) {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  // Need to centre loading text

  const handleMinusClick = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlusClick = () => {
    setQuantity(quantity + 1);
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
            <p>{quantity}</p>
            <button className="increment-button" onClick={handlePlusClick}>
              +
            </button>
          </div>
          <p className="single-product-price">£{product.price}</p>
          <button
            className="addtocart-button"
            onClick={() => handleCartClick(product.price, product.id, product.image)}
          >
            Add to Cart
          </button>
        </div>
      </li>
    </div>
  );
}

export default SingleProduct;
