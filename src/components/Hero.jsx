import "./Hero.css";
import logo from "../assets/logo/logo-transparent.png";

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <img src={logo} alt="Migshot Auto Solutions" className="hero__logo" />
        <p className="hero__tagline">We make your paint ideas into a reality.</p>
        <p className="hero__sub">
          Twenty-plus years of body work, custom paint, and insurance repairs,
          right here in Philly. Miguel Rodriguez and his crew turn wrecked
          panels into show cars — no shortcuts, no runaround.
        </p>
        <div className="hero__actions">
          <a href="tel:2158331530" className="btn btn--primary">
            Call Now — 215-833-1530
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
