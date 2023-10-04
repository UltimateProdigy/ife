import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <h3 className="footer-brandname">ÌFÉ</h3>
      <div>
        <ul className="footer-links">
          <p className="footer-link-header">Links</p>
          <li>Home</li>
          <li>About</li>
          <li>Cart Page</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <ul className="footer-links">
          <p className="footer-link-header">Contact</p>
          <li>Email</li>
          <li>LinkedIn</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div>
        <ul className="footer-links">
          <p className="footer-link-header">Collection</p>
          <li>Men</li>
          <li>Women</li>
          <li>Children</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
