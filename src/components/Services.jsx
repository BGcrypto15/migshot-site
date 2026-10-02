import "./Services.css";

export const SERVICES = [
  {
    title: "Auto Body & Paint",
    desc: "Dents, scratches and collision damage fixed and painted to match. One panel, a full respray, or the custom color you've been thinking about for years.",
  },
  {
    title: "Bumper Repair",
    desc: "Cracked, scraped, or hanging off. Repaired and painted to match the rest of the car.",
  },
  {
    title: "Alloy Wheel Repair",
    desc: "Curb rash, scuffs and corrosion cleaned up and refinished.",
  },
  {
    title: "Headlight Restoration",
    desc: "Yellow, foggy lenses brought back to clear so you can actually see at night.",
  },
  {
    title: "Insurance Work",
    desc: "Got a claim? Bring your claim info and we'll work with your insurance company on the repair.",
  },
  {
    title: "Towing",
    desc: "Car not driveable? Call us and we'll set up a tow to the shop.",
  },
];

// Tapping "Get a quote" on a card jumps to the form with that service picked.
function pickService(title) {
  window.dispatchEvent(new CustomEvent("migshot:service", { detail: title }));
}

function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <p className="eyebrow glow-text">What we fix</p>
        <h2>Services</h2>
        <ul className="services__grid">
          {SERVICES.map((s) => (
            <li className="service-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a
                href="#contact"
                className="service-card__link"
                onClick={() => pickService(s.title)}
              >
                Get a quote<span className="visually-hidden"> for {s.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
