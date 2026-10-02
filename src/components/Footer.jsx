import "./Footer.css";
import { SHOP } from "../data/shop";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{SHOP.name}</p>
          <p>
            {SHOP.street}, {SHOP.cityLine}
          </p>
          <p>Mon to Fri 9 AM to 5 PM &middot; Sat 9 AM to 1 PM &middot; Sun closed</p>
          <p>Serving Philadelphia and the tri-state area. Fleet accounts welcome.</p>
        </div>
        <div className="footer__links">
          <a href={SHOP.phoneHref}>{SHOP.phoneDisplay}</a>
          <a href={SHOP.instagramUrl} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={`mailto:${SHOP.email}`}>Email</a>
        </div>
      </div>
      <div className="container">
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} {SHOP.name}. Philadelphia, PA.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
