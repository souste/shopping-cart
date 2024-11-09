import "../styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../api";
import { Link } from "react-router-dom";
import backIcon from "../assets/icons8-return-48.png";

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
          <p className="single-product-price">£{product.price}</p>
          <p>{product.description}</p>
          <p className="single-product-increment-title">QUANTITY:</p>
          <div className="quantity-increment">
            <button className="increment-button" onClick={handleMinusClick}>
              -
            </button>
            <p>{quantity}</p>
            <button className="increment-button" onClick={handlePlusClick}>
              +
            </button>
          </div>

          <Link to={`/shop`} className="single-product-buttons-container">
            <button
              className="addtocart-button"
              onClick={() => handleCartClick(product.title, product.price, product.id, product.image)}
            >
              Add to Cart
            </button>
            <button className="back-button">
              <img src={backIcon} alt="back-button" />
            </button>
          </Link>
        </div>
      </li>
    </div>
  );
}

export default SingleProduct;
