import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav className="nav">
        <a href="/" className="site-title">
          Souste's Shop
        </a>
        <ul>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
