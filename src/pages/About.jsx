import "../styles.css";
import oldShopPhoto from "../assets/about-page-80s-shop.jpg";
import fashionProducts from "../assets/about-page-products.jpg";

function About() {
  return (
    <div className="about-container">
      <div className="about-page-history">
        <div>
          <h2>About Us</h2>
          <p className="about-history-text">
            Established in 1982, we have always prided ourselves on delivering the highest quality of products. We
            started off as a jewely company, opening our first store in the East of London. A family business, we have
            always valued quality and customer experience over sales. This is something that will never change.
          </p>
        </div>
        <img className="about-shop-image" src={oldShopPhoto} alt="old-80s-shop" />
      </div>
      <div className="about-page-products">
        <img src={fashionProducts} alt="" />
        <div>
          <h2>Products for the whole family</h2>
          <p className="about-products-text">
            We started our business as a fashion store for women and soon branched out to cater to men. Eventually we
            branched out to jewelery and electronic products. We pride ourselves on only having the finest products to
            sell. If you don't like the product there is a guaranteed 30 day return policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
