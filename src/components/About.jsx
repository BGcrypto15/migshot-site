import "./About.css";
import artSrcSet from "../assets/about/miguel-artwork.png?w=380;680&format=webp&quality=62&as=srcset";
import artSrc from "../assets/about/miguel-artwork.png?w=680&format=webp&quality=62";
import { SHOP } from "../data/shop";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__grid">
        <figure className="about__art">
          <img
            src={artSrc}
            srcSet={artSrcSet}
            sizes="(max-width: 860px) 380px, 440px"
            width="680"
            height="816"
            loading="lazy"
            decoding="async"
            alt="Painted portrait of Miguel Rodriguez with the Puerto Rican flag, a lowered pickup and a sportbike"
          />
          <figcaption className="about__stat">
            <span className="about__stat-number">20+</span>
            <span className="about__stat-label">Years doing body work and paint</span>
          </figcaption>
        </figure>

        <div className="about__copy">
          <p className="eyebrow glow-text">The man behind Migshot</p>
          <h2>Meet Miguel</h2>
          <p>
            Miguel Rodriguez has been doing body work and paint for more than
            20 years. For a lot of that time, his work rolled out under
            somebody else&rsquo;s shop name. Migshot Auto Solutions is his own.
          </p>
          <p>
            Having his own shop means every job gets done his way. Take the
            time on the prep work nobody sees, get the color right, and
            don&rsquo;t hand the keys back until the car looks the way it
            should.
          </p>
          <p>
            Daily drivers, work trucks, lowriders, sportbikes. A scraped
            bumper gets the same attention as a full custom paint job. Got an
            idea for your ride? Bring it by and he&rsquo;ll tell you straight
            what it takes.
          </p>
          <a href={SHOP.smsHref} className="btn btn--outline about__cta">
            Text Miguel about your car
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
