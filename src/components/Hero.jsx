import "./Hero.css";
import logoSrcSet from "../assets/hero/migshot-logo-truck.png?w=480;845&format=webp&quality=72&as=srcset";
import logoSrc from "../assets/hero/migshot-logo-truck.png?w=845&format=webp&quality=72";
import { SHOP } from "../data/shop";
import { PhoneIcon, TextIcon, QuoteIcon, PinIcon } from "./icons/Icons";

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <img
          src={logoSrc}
          srcSet={logoSrcSet}
          sizes="(max-width: 860px) 100vw, 760px"
          width="845"
          height="628"
          alt="Migshot Auto Solutions logo: a custom painted blue pickup with purple and orange flames"
          className="hero__logo"
          fetchPriority="high"
          decoding="async"
        />

        <h1 className="hero__title">
          Auto Body, Collision &amp; Custom Paint in Philadelphia
        </h1>
        <p className="hero__tagline">We make your paint ideas into a reality.</p>

        <p className="hero__sub">
          Dents, scrapes, cracked bumpers, curb rash, foggy headlights, or a
          whole new color. Insurance claims welcome and towing available.
        </p>

        <div className="hero__actions">
          <a href={SHOP.phoneHref} className="btn btn--primary hero__btn">
            <PhoneIcon size={20} />
            Call {SHOP.phoneDisplay}
          </a>
          <a href={SHOP.smsHref} className="btn btn--outline hero__btn">
            <TextIcon size={20} />
            Text Us Photos
          </a>
          <a href="#contact" className="btn btn--ghost hero__btn">
            <QuoteIcon size={20} />
            Free Quote
          </a>
        </div>

        <ul className="hero__facts">
          <li>20+ years experience</li>
          <li>Insurance work</li>
          <li>Towing available</li>
        </ul>

        <a
          className="hero__address"
          href={SHOP.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <PinIcon size={18} />
          {SHOP.street}, {SHOP.cityLine}
        </a>
      </div>
    </section>
  );
}

export default Hero;
