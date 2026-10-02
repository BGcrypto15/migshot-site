import "./Process.css";
import { SHOP } from "../data/shop";

const STEPS = [
  {
    title: "Show us the damage",
    body: (
      <>
        Text a few photos to <a href={SHOP.smsHref}>{SHOP.phoneDisplay}</a>,
        fill out the quote form, or just swing by the shop.
      </>
    ),
  },
  {
    title: "Get a straight answer",
    body: "We look it over and give you a price before any work starts. Going through insurance? Bring your claim info.",
  },
  {
    title: "We do the work",
    body: "Body work, prep, and paint matched to your car. The prep is where a paint job lasts or fails, so it doesn't get rushed.",
  },
  {
    title: "Pick it up",
    body: "We call you when it's ready. You look it over before you drive off.",
  },
];

function Process() {
  return (
    <section id="process" className="process section">
      <div className="container">
        <p className="eyebrow glow-text">How it works</p>
        <h2>From drop-off to pickup</h2>
        <ol className="process__steps">
          {STEPS.map((s, i) => (
            <li className="step" key={s.title}>
              <span className="step__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
