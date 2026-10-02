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
          <p className="eyebrow glow-text">Meet Miguel</p>
          <h2>20+ years in the booth</h2>
          <p>
            Miguel Rodriguez has been doing body work and paint for more than
            20 years. Collision repairs, full resprays, custom colors, work
            trucks, lowriders, sportbikes.
          </p>
          <p>
            Ask his customers and they&rsquo;ll tell you the rest. He&rsquo;s
            straight with you about what your car needs. His prices are fair.
            He finishes when he says he will. And he makes the whole thing
            easy, insurance included.
          </p>
          <p>
            Miguel built Migshot on doing right by people. One car with a
            dented door or a whole fleet of work vans, you get the same work
            and the same respect.
          </p>
          <figure className="about__quote">
            <blockquote>
              <p>&ldquo;The best car painter I&rsquo;ve ever seen.&rdquo;</p>
            </blockquote>
            <figcaption>
              Dawill S., Google review (translated from Spanish)
            </figcaption>
          </figure>
          <a href={SHOP.smsHref} className="btn btn--outline about__cta">
            Text Miguel about your car
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
