import "../styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../api";

function Cart({ cart, quantity, setQuantity }) {
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice);
  }, [cart, calculateTotalPrice]);

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      <div className="cart-headers">
        <p>Item</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <ul>
        {cart.map((product) => {
          return (
            <li key={product.id} className="cart-product-container">
              <div>
                <h3 className="cart-product-title">
                  {product.title.length > 25 ? `${product.title.substring(0, 25)}...` : product.title}
                </h3>
                <img className="cart-image" src={product.image} alt="" />
              </div>

              <p className="cart-product-price">£{product.price}</p>

              <div className="quantity-increment">
                <button className="cart-increment-button">-</button>
                <p>{product.quantity}</p>
                <button className="cart-increment-button">+</button>
              </div>
              <p className="cart-subtotal">£{product.price * product.quantity}</p>
            </li>
          );
        })}
        <p className="cart-total">Total Price: £{totalPrice} </p>
      </ul>
    </div>
  );
}

export default Cart;
