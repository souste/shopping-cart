import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./styles.css";
import cartButton from "./assets/icons8-add-to-cart-50.png";

function NavBar({ cart }) {
  return (
    <nav className="nav">
      <Link to="/" id="site-title">
        Souste
      </Link>
      <ul>
        <CustomLink to="/shop">Shop</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/cart">
          <img src={cartButton} alt="cart-button" className="cart-button" /> {cart.length}
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
