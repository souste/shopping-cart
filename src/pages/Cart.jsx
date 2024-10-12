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
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <p>{product.quantity}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;
