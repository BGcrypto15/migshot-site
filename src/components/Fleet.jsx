import "./Fleet.css";
import { SHOP } from "../data/shop";
import { PhoneIcon, QuoteIcon, ClockIcon, PinIcon } from "./icons/Icons";

// Only offers Ben confirmed Miguel can commit to. Don't add promises here
// (turnaround times, discounts, net terms, on-site work) without checking.
const OFFERS = [
  {
    title: "Priority scheduling",
    body: "A work vehicle sitting at the shop is money lost. Fleet vehicles get worked in fast so they're back on the road.",
    Icon: ClockIcon,
  },
  {
    title: "One bill to your company",
    body: "We bill your business directly, so your drivers aren't paying out of pocket or chasing receipts.",
    Icon: QuoteIcon,
  },
  {
    title: "Pickup and towing",
    body: "Vehicle down, or can't spare a driver to drop it off? We'll set up getting it to the shop.",
    Icon: PinIcon,
  },
  {
    title: "Your company colors",
    body: "Repaints and touch-ups matched to your company colors, so every vehicle in the fleet looks the same.",
    Icon: BrushIcon,
  },
];

function BrushIcon(props) {
  return (
    <svg
      width={props.size || 22}
      height={props.size || 22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18.4 2.6a2 2 0 0 1 2.9 2.9L12 14.8 9.2 12z" />
      <path d="M9.2 12c-2 0-3.7 1.6-3.7 3.6 0 1.6-1 2.9-2.5 3.4 1.2 1.3 3 2 4.8 2 2.9 0 5.2-2.3 5.2-5.2z" />
    </svg>
  );
}

function startFleetQuote() {
  window.dispatchEvent(new CustomEvent("migshot:service", { detail: "__fleet__" }));
}

function Fleet() {
  return (
    <section id="fleet" className="fleet section">
      <div className="container">
        <div className="fleet__panel">
          <div className="fleet__intro">
            <p className="eyebrow glow-text">Fleet &amp; commercial</p>
            <h2>Keep your work vehicles on the road</h2>
            <p className="section-lead">
              Vans, pickups, work trucks and company cars. If your business runs
              vehicles anywhere in the Philadelphia tri-state area, Migshot
              handles the body work and paint so your fleet looks right and
              gets back out working.
            </p>
            <p className="fleet__where">
              All work is done at our shop at {SHOP.street}, Philadelphia.
              Serving businesses across PA, NJ and DE.
            </p>
            <div className="fleet__actions">
              <a href="#contact" className="btn btn--primary" onClick={startFleetQuote}>
                <QuoteIcon size={20} /> Get a fleet quote
              </a>
              <a href={SHOP.phoneHref} className="btn btn--outline">
                <PhoneIcon size={20} /> Call about fleet service
              </a>
            </div>
          </div>

          <ul className="fleet__offers">
            {OFFERS.map(({ title, body, Icon }) => (
              <li className="fleet-offer" key={title}>
                <span className="fleet-offer__icon">
                  <Icon size={22} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Fleet;
