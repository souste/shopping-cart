import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./styles.css";

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        El-Shipio
      </Link>
      <ul>
        <CustomLink to="/shop">Shop</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/cart">Cart</CustomLink>
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
