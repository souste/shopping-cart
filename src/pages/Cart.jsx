import "../styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../api";

function Cart({ cart }) {
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
                <p>£{product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
              <p className="cart-subtotal">Subtotal: £{product.price * product.quantity}</p>
            </li>
          );
        })}
        <p className="cart-total">Total: Need to figure this out</p>
      </ul>
    </div>
  );
}

export default Cart;
