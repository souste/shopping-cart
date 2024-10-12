import "../styles.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../api";

function Cart({ cart }) {
  useEffect(() => {
    console.log("cartmeal", cart);
  }, [cart]);

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>

      <ul>
        {cart.map((product) => {
          return (
            <li key={product.id}>
              <p>ID: {product.id}</p>
              <p>what is going on?</p>
            </li>
          );
        })}
      </ul>
      <p>Need to figure outhow to design the cart. Check other websites for ideas</p>
    </div>
  );
}

export default Cart;
