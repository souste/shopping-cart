import "../styles.css";
import homePageTv from "../assets/home-page-tv.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="home-page-text">
        <h1>
          Discover our curated collection products. Each piece is carefully selected for its quality, comfort, and
          style.
        </h1>
        <h2>Quality products, affordable prices, and exceptional service.</h2>
        <h3>
          Click <Link to={`/shop`}>HERE</Link> for all your shopping needs
        </h3>
      </div>
      <img src={homePageTv} alt="Home page TV" />
    </div>
  );
}

export default Home;
