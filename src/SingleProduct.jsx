import "./styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "./api";

function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  // Need to centre loading text

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
          <p>£{product.price}</p>
          <button>Add to Cart</button>
        </div>
      </li>
    </div>
  );
}

export default SingleProduct;
