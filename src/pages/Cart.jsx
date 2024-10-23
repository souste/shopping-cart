import "../styles.css";
import { useState, useEffect } from "react";

function Cart({ cart: initialCart }) {
  const [cart, setCart] = useState(initialCart);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = (cart) => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice(cart));
  }, [cart]);

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cart.map((product) => (product.id === id ? { ...product, quantity: newQuantity } : product));
    setCart(updatedCart);
  };

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>

      <ul>
        {cart.map((product) => {
          return (
            <li key={product.id} className="cart-product-container">
              <div>
                <img className="cart-image" src={product.image} alt="" />
              </div>
              <h3 className="cart-product-title">
                {product.title.length > 50 ? `${product.title.substring(0, 50)}...` : product.title}
              </h3>
              <div>
                <p className="cart-product-price">Price: £{product.price}</p>
                <div className="quantity-increment">
                  <p>Qty:</p>
                  <select
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
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
