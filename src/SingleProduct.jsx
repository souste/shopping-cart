import "./styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "./api";

function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  // check if I can add setLoading to dependency array

  useEffect(() => {
    getSingleProduct(productId).then((product) => {
      setProduct(product);
    });
  }, [productId]);

  return (
    <div>
      <ul>
        <li>{product.title}</li>
      </ul>
    </div>
  );
}

export default SingleProduct;
