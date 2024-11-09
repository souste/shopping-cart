import "../styles.css";
import oldShopPhoto from "../assets/about-page-80s-shop.jpg";
import fashionProducts from "../assets/about-page-products.jpg";
import moneyBackGuarantee from "../assets/about-money-guarantee.jpg";
import sustainability from "../assets/sustainability.jpg";

function About() {
  return (
    <div className="about-container">
      <div className="about-page-history">
        <div>
          <h2>About Us</h2>
          <p className="about-history-text">
            Since 1982, our family-owned business has been dedicated to crafting exquisite jewelry, stylish fashion, and
            cutting-edge electronics. From our humble beginnings in East London, we've grown into a global brand
            synonymous with quality, innovation, and customer satisfaction.
          </p>
          <p className="about-history-text">
            Our commitment to excellence is unwavering. We source only the finest materials, employ skilled artisans,
            and adhere to strict ethical standards. Every piece we create is a testament to our passion for perfection.{" "}
          </p>
          <p className="about-history-text">
            Whether you're seeking a timeless piece of jewelry, a trendy fashion item, or the latest tech gadget, you'll
            find it here. Join us on a journey of style, elegance, and innovation.
          </p>
        </div>
        <img className="about-shop-image" src={oldShopPhoto} alt="old-80s-shop" />
      </div>

      <div className="about-page-products">
        <img className="about-shop-image" src={fashionProducts} alt="products-display" />
        <div>
          <h2>Products for the whole family</h2>
          <p className="about-products-text">
            At Souste, we're passionate about curating a collection of unique and stylish products. From trendy fashion
            to cutting-edge electronics, we've got something for everyone. Our commitment to quality, affordability, and
            customer satisfaction sets us apart.
          </p>
        </div>
      </div>

      <div className="about-page-guarantee">
        <div>
          <h2>30 Day Money Back Guarantee</h2>
          <p className="about-guarantee-text">
            Our customers are at the heart of everything we do. We're committed to providing exceptional customer
            service, from personalized recommendations to hassle-free returns. Your satisfaction is our top priority,
            which is why we offer a 30-day money-back guarantee on all eligible purchases.
          </p>
        </div>
        <img src={moneyBackGuarantee} alt="money-back-guarantee" />
      </div>
      <div className="about-page-sustainability">
        <div className="about-sustainability-text-container">
          <h2 className="about-sustainability-title">Commitment to a Sustainable Future</h2>
          <p className="about-sustainability-text">
            We’re committed to sustainable practices and minimizing our environmental impact. We source eco-friendly
            materials, reduce waste, and optimize energy consumption. By choosing sustainable options and supporting
            ethical initiatives, we strive to create a better future for generations to come.
          </p>
          <p className="about-sustainability-text">
            We believe in transparency and accountability. We regularly assess our environmental impact and share our
            progress with our customers. By working together, we can create a more sustainable future.
          </p>
          <div></div>
        </div>
        <img className="about-sustainability-image" src={sustainability} alt="hand-holding-planet" />
      </div>
    </div>
  );
}

export default About;
