import "./Services.css";

const SERVICES = [
  {
    title: "Auto Body & Paint",
    desc: "Full color matching and refinishing, from a single panel to a complete respray.",
  },
  {
    title: "Bumper Repair",
    desc: "Cracked, scraped, or hanging off, repaired and repainted to match.",
  },
  {
    title: "Alloy Wheel Repair",
    desc: "Curb rash, bends, and corrosion fixed without replacing the wheel.",
  },
  {
    title: "Headlight Restoration",
    desc: "Foggy, yellowed lenses brought back to clear.",
  },
  {
    title: "Insurance Work",
    desc: "We work directly with your insurance company on the claim.",
  },
  {
    title: "Towing",
    desc: "Need it brought in? We can arrange towing to the shop.",
  },
];

function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <p className="eyebrow glow-text">What we do</p>
        <h2>Services</h2>
        <div className="services__grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
