import "./MobileBar.css";
import { SHOP } from "../data/shop";
import { PhoneIcon, TextIcon, QuoteIcon } from "./icons/Icons";

// Fixed bar at the bottom of the screen on phones. One tap to call, text,
// or jump to the quote form from anywhere on the page.
function MobileBar() {
  return (
    <nav className="mobile-bar" aria-label="Quick contact">
      <a href={SHOP.phoneHref} className="mobile-bar__btn mobile-bar__btn--call">
        <PhoneIcon size={20} />
        <span>Call</span>
      </a>
      <a href={SHOP.smsHref} className="mobile-bar__btn">
        <TextIcon size={20} />
        <span>Text</span>
      </a>
      <a href="#contact" className="mobile-bar__btn">
        <QuoteIcon size={20} />
        <span>Quote</span>
      </a>
    </nav>
  );
}

export default MobileBar;
