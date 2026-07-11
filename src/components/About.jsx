import "./About.css";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__grid">
        <div className="about__copy">
          <p className="eyebrow">About the shop</p>
          <h2>Same hands. Same standards. Now under his own name.</h2>
          <p>
            Miguel Rodriguez has been painting and repairing cars in
            Philadelphia for over twenty years. Before Migshot, he built his
            name working under other shops — matching factory colors,
            straightening frames, and turning insurance nightmares back into
            daily drivers.
          </p>
          <p>
            Now he's doing it under his own roof. Migshot Auto Solutions is
            Miguel's shop, built on the same standards that got him this far:
            real prep work, real color matching, and paint jobs that hold up
            — whether it's a fender bender or a full custom build.
          </p>
          <p>
            Insurance claim, daily driver, or a truck you want turned into
            something nobody else on the block has — bring it in.
          </p>
        </div>
        <div className="about__stat">
          <span className="about__stat-number">20+</span>
          <span className="about__stat-label">Years of experience</span>
        </div>
      </div>
    </section>
  );
}

export default About;
