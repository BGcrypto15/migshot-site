import { useState } from "react";
import InstagramIcon from "./icons/InstagramIcon";
import "./Contact.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeebywka";

const HOURS = [
  { day: "Monday", time: "9:00 AM – 5:00 PM" },
  { day: "Tuesday", time: "9:00 AM – 5:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 5:00 PM" },
  { day: "Thursday", time: "9:00 AM – 5:00 PM" },
  { day: "Friday", time: "9:00 AM – 5:00 PM" },
  { day: "Saturday", time: "9:00 AM – 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container contact__grid">
        <div>
          <p className="eyebrow glow-text">Get in touch</p>
          <h2>Bring your car in</h2>

          <form className="contact__form" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" />
            </label>
            <label>
              What do you need done?
              <textarea name="message" rows="4" required />
            </label>

            <button
              type="submit"
              className="btn btn--primary"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="contact__status contact__status--ok">
                Got it. We'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="contact__status contact__status--err">
                Something went wrong. Call us instead at 215-833-1530.
              </p>
            )}
          </form>
        </div>

        <div className="contact__info">
          <div className="contact__block">
            <h3>Visit the shop</h3>
            <p>2701 E Butler St<br />Philadelphia, PA 19137</p>
            <a
              className="contact__link"
              href="https://www.google.com/maps/search/?api=1&query=2701+E+Butler+St+Philadelphia+PA+19137"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions →
            </a>
          </div>

          <div className="contact__block">
            <h3>Call or message</h3>
            <a className="contact__link" href="tel:2158331530">215-833-1530</a>
            <a
              className="contact__link contact__link--ig"
              href="https://instagram.com/MigshotAutoSolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Migshot Auto Solutions on Instagram"
            >
              <InstagramIcon size={18} />
              @MigshotAutoSolutions
            </a>
          </div>

          <div className="contact__block">
            <h3>Hours</h3>
            <ul className="contact__hours">
              {HOURS.map((h) => (
                <li key={h.day}>
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
