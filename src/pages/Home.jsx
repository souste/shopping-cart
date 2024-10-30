import "../styles.css";
import homePageTv from "../assets/home-page-tv.jpg";
import { Link } from "react-router-dom";
import shopBannerPhoto from "../assets/shop-banner-photo.jpg";

function Home() {
  return (
    <div className="home-container">
      <div className="home-page-banner">
        <img src={shopBannerPhoto} alt="woman-holding-bag" />
        <div className="home-page-banner-content">
          <p className="home-page-banner-text">
            Welcome to El-Shopio, your ultimate destination for stylish and trendy fashion. Discover a curated
            collection of clothing, accessories, and footwear that reflects the latest trends and timeless classics.
            From everyday essentials to statement pieces, our diverse range caters to every style and occasion. Immerse
            yourself in a world of fashion and elevate your wardrobe with our exquisite offerings.
          </p>
          <button className="home-page-shop-button">
            <Link to={`/shop`}>SHOP NOW</Link>
          </button>
        </div>
      </div>
      <div className="home-main-content"></div>
    </div>
  );
}

export default Home;
