import "../styles.css";
import { useState, useEffect } from "react";

function Cart({ cart: initialCart, onCartChange }) {
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

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    setTotalPrice(calculateTotalPrice(updatedCart));
    onCartChange(updatedCart.length);
  };

  return (
    <div className="cart-container">
      <h2>YOUR CART</h2>
      <div className="cart-titles">
        <div className="item-title-container">
          <p>ITEM</p>
        </div>
        <div className="price-quantity-subtotal-title-container">
          <p>PRICE</p>
          <p>QUANTITY</p>
          <p>SUBTOTAL</p>
        </div>
      </div>
      <ul>
        {cart.map((product) => {
          return (
            <div key="cart-list">
              <li key={product.id} className="cart-product-container">
                <div>
                  <img className="cart-image" src={product.image} alt="" />
                </div>
                <h3 className="cart-product-title">
                  {product.title.length > 25 ? `${product.title.substring(0, 25)}...` : product.title}
                </h3>
                <div className="price-quantity-subtotal-container">
                  <p className="cart-product-price">£{product.price.toFixed(2)}</p>
                  <div className="quantity-increment">
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
                  <p className="cart-subtotal">£{(product.price * product.quantity).toFixed(2)}</p>
                </div>
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
              </li>
            </div>
          );
        })}
        <div>
          <p className="cart-total">Total: £{totalPrice.toFixed(2)} </p>
          <button className="checkout-button" onClick={() => alert("Product Purchased")}>
            Checkout
          </button>
        </div>
      </ul>
    </div>
  );
}

export default Cart;
