import { useEffect, useState } from "react";
import InstagramIcon from "./icons/InstagramIcon";
import { PhoneIcon, TextIcon, PinIcon, ClockIcon, CameraIcon } from "./icons/Icons";
import { SHOP, HOURS, hoursText, openStatus } from "../data/shop";
import { SERVICES } from "./Services";
import "./Contact.css";

const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => s.title),
  "Custom paint job",
  "Not sure / something else",
];

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [service, setService] = useState("");
  const [shopStatus, setShopStatus] = useState(null);

  useEffect(() => {
    setShopStatus(openStatus());
    const id = setInterval(() => setShopStatus(openStatus()), 60000);
    return () => clearInterval(id);
  }, []);

  // A service card's "Get a quote" link preselects that service here.
  useEffect(() => {
    const onPick = (e) => setService(e.detail);
    window.addEventListener("migshot:service", onPick);
    return () => window.removeEventListener("migshot:service", onPick);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    const data = new FormData(form);
    // Email is optional. Don't send a blank one, so the form service never
    // rejects the request over an empty email field.
    if (!String(data.get("email") || "").trim()) data.delete("email");
    try {
      const res = await fetch(SHOP.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setService("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <p className="eyebrow glow-text">Free quote</p>
        <h2>Tell us what happened</h2>
        <p className="section-lead">
          Fastest way: text a few photos of the damage to{" "}
          <a className="contact__inline" href={SHOP.smsHref}>{SHOP.phoneDisplay}</a>.
          Or fill this out and we&rsquo;ll get back to you.
        </p>

        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="New quote request from the website" />
            {/* Spam trap. Real people never see or fill this. */}
            <div className="visually-hidden" aria-hidden="true">
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="contact__row">
              <label>
                <span>Name <span className="req">*</span></span>
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                <span>Phone <span className="req">*</span></span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                />
              </label>
            </div>

            <label>
              <span>Email <span className="opt">(optional)</span></span>
              <input type="email" name="email" autoComplete="email" />
            </label>

            <div className="contact__row">
              <label>
                Year, make &amp; model
                <input type="text" name="vehicle" placeholder="2014 Honda Accord" />
              </label>
              <label>
                What do you need?
                <select
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="">Pick one</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </label>
            </div>

            <fieldset className="contact__radios">
              <legend>Going through insurance?</legend>
              {["Yes", "No", "Not sure yet"].map((v) => (
                <label key={v} className="contact__radio">
                  <input type="radio" name="insurance_claim" value={v} />
                  <span>{v}</span>
                </label>
              ))}
            </fieldset>

            <label>
              <span>What happened? <span className="req">*</span></span>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Where's the damage, how did it happen, anything else we should know."
              />
            </label>

            <button
              type="submit"
              className="btn btn--primary contact__submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send my quote request"}
            </button>

            <p className="contact__photo-tip">
              <CameraIcon size={18} />
              <span>
                Got photos? <a href={SHOP.smsHref}>Text them to {SHOP.phoneDisplay}</a>{" "}
                after you send this.
              </span>
            </p>

            <div aria-live="polite">
              {status === "success" && (
                <p className="contact__status contact__status--ok">
                  Got it, thanks. We&rsquo;ll get back to you soon. If it&rsquo;s
                  urgent, call {SHOP.phoneDisplay}.
                </p>
              )}
              {status === "error" && (
                <p className="contact__status contact__status--err">
                  That didn&rsquo;t go through. Call or text us at{" "}
                  <a href={SHOP.phoneHref}>{SHOP.phoneDisplay}</a> instead.
                </p>
              )}
            </div>
          </form>

          <div className="contact__info">
            <div className="contact__quick">
              <a href={SHOP.phoneHref} className="btn btn--primary">
                <PhoneIcon size={20} /> Call {SHOP.phoneDisplay}
              </a>
              <a href={SHOP.smsHref} className="btn btn--outline">
                <TextIcon size={20} /> Text us
              </a>
            </div>

            <div className="contact__block">
              <h3><PinIcon size={20} /> The shop</h3>
              <p>
                {SHOP.street}
                <br />
                {SHOP.cityLine}
              </p>
              <div className="contact__map">
                <iframe
                  title="Map to Migshot Auto Solutions, 2701 E Butler St, Philadelphia"
                  src={SHOP.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                className="contact__link"
                href={SHOP.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions &rsaquo;
              </a>
            </div>

            <div className="contact__block">
              <h3><ClockIcon size={20} /> Hours</h3>
              {shopStatus && (
                <p className={`contact__open ${shopStatus.open ? "is-open" : "is-closed"}`}>
                  {shopStatus.text}
                </p>
              )}
              <ul className="contact__hours">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className={shopStatus && shopStatus.today === h.day ? "is-today" : undefined}
                  >
                    <span>{h.label}</span>
                    <span>{hoursText(h)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact__block">
              <h3><InstagramIcon size={20} /> See more work</h3>
              <a
                className="contact__link"
                href={SHOP.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SHOP.instagramHandle} on Instagram &rsaquo;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
