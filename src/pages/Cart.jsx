import "../styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../api";

function Cart({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice);
  }, [cart, calculateTotalPrice]);

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>

      <ul>
        {cart.map((product) => {
          return (
            <li key={product.id} className="cart-product-container">
              <img src={product.image} alt="" />
              <div>
                <h3>{product.title}</h3>
                <div className="price-quantity-container">
                  <p>Price: £{product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                </div>
                <p className="cart-subtotal">Subtotal: £{product.price * product.quantity}</p>
              </div>
            </li>
          );
        })}
        <p className="cart-total">Total Price: £{totalPrice} </p>
      </ul>
    </div>
  );
}

export default Cart;
