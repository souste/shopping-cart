import "../styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../api";

function Cart() {
  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      <p>Need to figure outhow to design the cart. Check other websites for ideas</p>
    </div>
  );
}

export default Cart;
