import "./About.css";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__grid">
        <div className="about__copy">
          <p className="eyebrow glow-text">About the shop</p>
          <h2>Built from nothing but vision and dreams.</h2>
          <p>
            Miguel Rodriguez started with a spray gun, a work ethic, and a
            dream of running his own shop. No investors, no shortcuts. Just
            years of hands-on work perfecting every color match, every panel,
            every finish, until Migshot Auto Solutions became a name people
            in Philadelphia and across the tri-state area actually trust.
          </p>
          <p>
            Every car that comes through these doors gets the same treatment,
            because Miguel puts his own name on the sign out front. That
            means real prep work, real color matching, and paint that holds
            up long after it leaves the shop. This isn't just a job to him.
            It's twenty-plus years of pride, poured into every job that comes
            through the door.
          </p>
          <p>
            Insurance claim, daily driver, or a custom build nobody else on
            the block has attempted, bring it in and see what real pride in
            the work looks like.
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
