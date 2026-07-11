import "./Hero.css";
import logo from "../assets/logo/logo-hero.jpg";

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <img src={logo} alt="Migshot Auto Solutions" className="hero__logo" />
        <p className="hero__tagline">
          We make your paint ideas into a reality.
        </p>
        <p className="hero__sub">
          Over twenty years of body work and custom paint, built from the
          ground up on nothing but vision, grit, and a name Miguel put on the
          door himself. Serving Philadelphia and the tri-state area.
        </p>
        <div className="hero__actions">
          <a href="tel:2158331530" className="btn btn--primary">
            Call Now: 215-833-1530
          </a>
          <a href="#contact" className="btn btn--outline">
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
